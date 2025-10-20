import { useState, useMemo, useCallback } from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
        overflow="visible"
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

            {/* Categories Dropdown - Centered at bottom */}
            <Box
              display="flex"
              justifyContent="center"
              mt={4}
              position="relative"
              zIndex={10}
            >
              <Menu
                placement="bottom"
                strategy="fixed"
                flip={false}
                autoSelect={false}
              >
                <MenuButton
                  as={Button}
                  size="md"
                  bg="rgba(255,255,255,0.2)"
                  color="white"
                  rightIcon={<ChevronDownIcon />}
                  fontWeight="normal"
                  borderRadius="full"
                  px={3}
                  py={1}
                  transition="all 0.3s"
                  _hover={{
                    bg: "rgba(255,255,255,0.3)",
                    transform: "translateY(-2px)",
                  }}
                  _active={{ bg: "rgba(255,255,255,0.3)" }}
                  boxShadow="none"
                >
                  Categories
                </MenuButton>
                <MenuList
                  bg="white"
                  maxH="400px"
                  overflowY="auto"
                  py={2}
                  border="2px solid #FFD700"
                  boxShadow="0 8px 24px rgba(229, 62, 62, 0.15)"
                  zIndex={1001}
                >
                  {/* All Recipes */}
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    bg="#FFD700"
                    color="#E53E3E"
                    fontWeight="bold"
                    _hover={{ bg: "#FFC107" }}
                    mb={2}
                    mx={2}
                    borderRadius="md"
                  >
                    ✨ All Recipes
                  </MenuItem>

                  {/* World Cuisines */}
                  <MenuItem
                    fontWeight="bold"
                    isDisabled
                    color="#E53E3E"
                    fontSize="sm"
                    bg="rgba(255, 215, 0, 0.1)"
                    px={3}
                    py={2}
                    mb={1}
                  >
                    🌍 WORLD CUISINES
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("mexican");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🌮 Mexican
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("italian");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍕 Italian
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("indian");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍛 Indian
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("thai");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍜 Thai
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("chinese");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥡 Chinese
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("japanese");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍱 Japanese
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("french");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥐 French
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("american");
                      setSearchTerm("");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍔 American
                  </MenuItem>

                  {/* Popular */}
                  <MenuItem
                    fontWeight="bold"
                    isDisabled
                    color="#E53E3E"
                    fontSize="sm"
                    bg="rgba(255, 215, 0, 0.1)"
                    px={3}
                    py={2}
                    mt={2}
                    mb={1}
                  >
                    🔥 POPULAR
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("soup");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍲 Soup Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("chili");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🌶️ Chili Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("pasta");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍝 Pasta Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("salad");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥗 Salad Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("bread");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍞 Bread Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("cookie");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍪 Cookie Recipes
                  </MenuItem>

                  {/* Healthy & Diet */}
                  <MenuItem
                    fontWeight="bold"
                    isDisabled
                    color="#E53E3E"
                    fontSize="sm"
                    bg="rgba(255, 215, 0, 0.1)"
                    px={3}
                    py={2}
                    mt={2}
                    mb={1}
                  >
                    🥗 HEALTHY & DIET
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("keto");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥑 Keto Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("healthy");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    💚 Healthy Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedDiet("Vegetarian");
                      setSearchTerm("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🌱 Vegetarian Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedDiet("Vegan");
                      setSearchTerm("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥬 Vegan Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedDiet("Pescatarian");
                      setSearchTerm("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🐟 Pescatarian Recipes
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("gluten free");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🌾 Gluten-Free Recipes
                  </MenuItem>

                  {/* Holidays */}
                  <MenuItem
                    fontWeight="bold"
                    isDisabled
                    color="#E53E3E"
                    fontSize="sm"
                    bg="rgba(255, 215, 0, 0.1)"
                    px={3}
                    py={2}
                    mt={2}
                    mb={1}
                  >
                    🎉 HOLIDAYS
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("thanksgiving");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🦃 Thanksgiving
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("christmas");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🎄 Christmas
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("halloween");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🎃 Halloween
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("easter");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🐰 Easter
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("valentine");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    💝 Valentine&apos;s Day
                  </MenuItem>

                  {/* Meal Types */}
                  <MenuItem
                    fontWeight="bold"
                    isDisabled
                    color="#E53E3E"
                    fontSize="sm"
                    bg="rgba(255, 215, 0, 0.1)"
                    px={3}
                    py={2}
                    mt={2}
                    mb={1}
                  >
                    🍽️ MEAL TYPES
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("breakfast");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍳 Breakfast
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("lunch");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🥪 Lunch
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("dinner");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍽️ Dinner
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("dessert");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍰 Desserts
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("drink");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍹 Drinks
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm("snack");
                      setSelectedDiet("");
                    }}
                    _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                    pl={6}
                    color="black"
                  >
                    🍿 Snacks
                  </MenuItem>
                </MenuList>
              </Menu>
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
                We couldn&apos;t find any recipes matching your search.
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
