import { useParams, useNavigate } from "react-router-dom";
import { data } from "../utils/data";
import { toSlug } from "../utils/slug";
import { generateRecipeSchema } from "../utils/recipeSchema";
import { Navbar } from "../components/Navbar";
import {
  Box,
  Container,
  Heading,
  Image,
  Button,
  Text,
  Tag,
  UnorderedList,
  ListItem,
  VStack,
  Flex,
  HStack,
  Link as CLink,
} from "@chakra-ui/react";

export const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hit = data.hits.find((x) => toSlug(x.recipe.label) === id);
  const recipe = hit?.recipe;

  if (!recipe) {
    return (
      <Box minH="100vh" display="grid" placeItems="center" bg="gray.50">
        <Heading>Recipe not found</Heading>
      </Box>
    );
  }

  const ld = generateRecipeSchema(recipe);

  return (
    <Box bg="#FFD700" minH="100vh">
      <Navbar
        searchTerm=""
        setSearchTerm={() => {}}
        selectedDiet=""
        setSelectedDiet={() => {}}
        selectedCategory=""
        setSelectedCategory={() => {}}
      />
      <Container maxW="container.xl" pt={{ base: "130px", lg: "100px" }} pb={4}>
        <HStack mb={3} justify="space-between">
          <Button
            onClick={() => navigate(-1)}
            colorScheme="red"
            variant="solid"
            size="sm"
            bg="#E53E3E"
            color="white"
            _hover={{ bg: "#C53030" }}
          >
            ← Back
          </Button>
          <CLink href={recipe.url} isExternal>
            <Button colorScheme="red" size="sm">
              View Source Recipe
            </Button>
          </CLink>
        </HStack>

        <Box
          bg="white"
          borderRadius="xl"
          overflow="hidden"
          p={{ base: 6, md: 4 }}
        >
          <VStack spacing={{ base: 4, md: 3 }} align="stretch">
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 6, md: 4 }}
            >
              <Image
                src={recipe.image}
                alt={recipe.label}
                loading="lazy"
                borderRadius="xl"
                maxW={{ base: "100%", md: "40%" }}
                maxH={{ md: "300px" }}
                objectFit="cover"
              />
              <Box flex="1">
                <Text
                  color="gray.500"
                  fontSize="sm"
                  mb={1}
                  textTransform="uppercase"
                >
                  {recipe.mealType?.[0] || "MEAL"}
                </Text>
                <Heading as="h1" size={{ base: "xl", md: "lg" }} mb={2}>
                  {recipe.label}
                </Heading>
                <Text fontSize="md" mb={1}>
                  Total Time:{" "}
                  {recipe.totalTime ? `${recipe.totalTime} min` : "Unknown"}
                </Text>
                <Text fontSize="md" mb={3}>
                  Servings: {recipe.yield ?? "—"}
                </Text>

                <Box mb={4}>
                  <Heading as="h2" size="sm" mb={2}>
                    Ingredients
                  </Heading>
                  <UnorderedList spacing={1} fontSize="sm">
                    {recipe.ingredientLines.map((line, i) => (
                      <ListItem key={i}>{line}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                {recipe.healthLabels?.length > 0 && (
                  <Box mb={2}>
                    <Text fontWeight="bold" mb={1} fontSize="sm">
                      Health labels
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {recipe.healthLabels.map((l) => (
                        <Tag key={l} colorScheme="purple" size="sm">
                          {l}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}

                {recipe.dietLabels?.length > 0 && (
                  <Box mb={2}>
                    <Text fontWeight="bold" mb={1} fontSize="sm">
                      Diet
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {recipe.dietLabels.map((l) => (
                        <Tag key={l} colorScheme="green" size="sm">
                          {l}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}

                {recipe.cautions?.length > 0 && (
                  <Box>
                    <Text fontWeight="bold" mb={1} fontSize="sm">
                      Cautions
                    </Text>
                    <Flex wrap="wrap" gap={1}>
                      {recipe.cautions.map((c) => (
                        <Tag key={c} colorScheme="red" size="sm">
                          {c}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                )}
              </Box>
            </Flex>
          </VStack>
        </Box>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </Container>
    </Box>
  );
};
