import { useState, useMemo, useCallback } from "react";
import { Container, SimpleGrid, Box, Text, Image } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Navbar } from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import { Footer } from "../components/Footer";
import CategoryPill from "../components/CategoryPill";
import {
  COLORS,
  GRADIENTS,
  SPACING,
  SHADOWS,
  CATEGORY_DATA,
} from "../theme/constants";

/**
 * RecipeListPage Component
 * Main page displaying recipe collection with filtering capabilities
 *
 * Features:
 * - Search by recipe name
 * - Filter by diet labels (Vegetarian, Vegan, Pescatarian)
 * - Filter by cuisine type (Mexican, Italian, etc.)
 * - Interactive category pills for quick filtering
 *
 * @component
 * @returns {JSX.Element} Recipe list page with hero section and recipe grid
 */
export const RecipeListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  /**
   * Memoized filtered recipe list based on search and filter criteria
   * Optimized to prevent unnecessary recalculations
   */
  const filteredRecipes = useMemo(() => {
    const query = searchTerm.toLowerCase().replace("-", " ").trim();

    return data.hits.filter(({ recipe }) => {
      const title = recipe.label.toLowerCase();

      // Text search: search in recipe title, cuisine type, health labels, diet labels, mealType, and dishType
      const matchesText =
        !query ||
        title.includes(query) ||
        (recipe.cuisineType || []).some((cuisine) =>
          cuisine.toLowerCase().includes(query)
        ) ||
        (recipe.healthLabels || []).some((label) =>
          label.toLowerCase().includes(query)
        ) ||
        (recipe.dietLabels || []).some((label) =>
          label.toLowerCase().includes(query)
        ) ||
        (recipe.mealType || []).some((meal) =>
          meal.toLowerCase().includes(query)
        ) ||
        (recipe.dishType || []).some((dish) =>
          dish.toLowerCase().includes(query)
        );

      // Diet filter: check health labels and diet labels
      const matchesDiet =
        !selectedDiet ||
        (recipe.healthLabels || []).includes(selectedDiet) ||
        (recipe.dietLabels || []).includes(selectedDiet);

      // Category filter: check cuisine type
      const matchesCategory =
        !selectedCategory ||
        (recipe.cuisineType || []).some((cuisine) =>
          cuisine.toLowerCase().includes(selectedCategory.toLowerCase())
        );

      return matchesText && matchesDiet && matchesCategory;
    });
  }, [searchTerm, selectedDiet, selectedCategory]);

  /**
   * Get suggested recipes when no results are found
   * Returns random popular recipes as suggestions
   */
  const suggestedRecipes = useMemo(() => {
    if (filteredRecipes.length > 0) return [];

    // Get random 8 recipes as suggestions
    const allRecipes = [...data.hits];
    const shuffled = allRecipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }, [filteredRecipes]);

  /**
   * Creates a handler for category pill clicks
   * @param {Object} category - Category data object
   * @returns {Function} Click handler function
   */
  const handleCategoryClick = useCallback((category) => {
    return () => {
      // Reset all filters first
      setSelectedCategory("");
      setSelectedDiet("");
      setSearchTerm("");

      // Apply the specific filter based on category type
      switch (category.type) {
        case "search":
          setSearchTerm(category.value);
          break;
        case "diet":
          setSelectedDiet(category.value);
          break;
        case "category":
          setSelectedCategory(category.value);
          break;
        default:
          break;
      }
    };
  }, []);

  return (
    <Box bg={COLORS.primary.gold} minH="100vh">
      {/* Navigation Bar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDiet={selectedDiet}
        setSelectedDiet={setSelectedDiet}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Hero Section with Category Pills */}
      <Box
        bg={GRADIENTS.hero}
        color={COLORS.white}
        py={{ base: 6, md: 8 }}
        mt={{
          base: "64px",
          lg: SPACING.navbar.height.desktop,
        }}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.1"
          bgImage="radial-gradient(circle at 20% 80%, white 2px, transparent 2px), radial-gradient(circle at 80% 20%, white 2px, transparent 2px), radial-gradient(circle at 40% 40%, white 1px, transparent 1px)"
          bgSize="50px 50px, 30px 30px, 20px 20px"
          aria-hidden="true"
        />

        <Container maxW="container.xl" position="relative" zIndex="1">
          <Box textAlign="center" maxW="800px" mx="auto">
            {/* Main Heading */}
            <Text
              as="h1"
              fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              mb={1}
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                textStroke: "1px rgba(255,255,255,0.5)",
              }}
              ml={{ base: -7, md: -10 }}
            >
              🍳 Discover Amazing
            </Text>

            {/* Logo */}
            <Box display="flex" justifyContent="center" mb={1}>
              <Image
                src={`${import.meta.env.BASE_URL}recipes-logo.svg`}
                alt="Recipes Logo"
                h={{ base: "60px", sm: "70px", md: "80px", lg: "90px" }}
                filter={SHADOWS.logo}
              />
            </Box>

            {/* Subtitle */}
            <Text
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
              mb={4}
              opacity="0.9"
              maxW="600px"
              mx="auto"
              lineHeight="1.4"
            >
              Explore thousands of delicious recipes from around the world. Find
              the perfect dish for any occasion, dietary preference, or cuisine
              type.
            </Text>

            {/* Category Pills Grid */}
            <Box
              display="flex"
              justifyContent="center"
              gap={3}
              flexWrap="wrap"
              fontSize={{ base: "xs", sm: "sm" }}
              role="group"
              aria-label="Recipe categories"
            >
              {CATEGORY_DATA.map((category) => (
                <CategoryPill
                  key={category.label}
                  emoji={category.emoji}
                  label={category.label}
                  onClick={handleCategoryClick(category)}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Recipe Grid Section */}
      <Container maxW="container.xl" py={4}>
        {filteredRecipes.length === 0 ? (
          <>
            <Box
              textAlign="center"
              py={8}
              bg={COLORS.white}
              borderRadius="xl"
              boxShadow="lg"
              mb={8}
            >
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                No recipes found 😕
              </Text>
              <Text color="gray.600" mb={4}>
                We couldn't find any recipes matching your search.
              </Text>
              <Text color="gray.500" fontSize="sm">
                Try adjusting your search terms or explore our suggestions below
              </Text>
            </Box>

            {/* Suggested Recipes */}
            {suggestedRecipes.length > 0 && (
              <>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb={4}
                  textAlign="center"
                  color="gray.700"
                >
                  You might like these recipes instead:
                </Text>
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                  {suggestedRecipes.map((hit, index) => (
                    <RecipeCard
                      key={`suggestion-${hit.recipe.label}-${index}`}
                      recipe={hit.recipe}
                    />
                  ))}
                </SimpleGrid>
              </>
            )}
          </>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
            {filteredRecipes.map((hit, index) => (
              <RecipeCard
                key={`${hit.recipe.label}-${index}`}
                recipe={hit.recipe}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
