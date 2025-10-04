import {
  Box,
  Flex,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Z_INDEX, SPACING } from "../theme/constants";

/**
 * Navbar Component
 * Fixed navigation bar with comprehensive recipe filtering system
 *
 * Features:
 * - Text search input for recipe names
 * - Diet filter buttons (Vegetarian, Vegan, Pescatarian)
 * - Categories dropdown with 31+ organized items:
 *   - 🌍 World Cuisines (9 items): Mexican, Italian, Indian, Chinese, Japanese, Thai, French, Mediterranean, American
 *   - 🔥 Popular (6 items): Quick & Easy, Comfort Food, Restaurant Favorites, Trending, One-Pot Meals, Meal Prep
 *   - 🥗 Healthy & Diet (5 items): Low-Calorie, High-Protein, Keto, Paleo, Gluten-Free
 *   - 🎉 Holidays (5 items): Thanksgiving, Christmas, Easter, Halloween, Valentine's Day
 *   - 🍽️ Meal Types (6 items): Breakfast, Lunch, Dinner, Desserts, Beverages, Snacks
 * - Responsive design with mobile drawer and desktop dropdown
 * - Glass morphism styling with gold accent colors
 * - Complete feature parity between mobile and desktop
 *
 * Design Patterns:
 * - All filter buttons reset other filters when clicked
 * - Desktop: Gold-bordered dropdown menu with organized sections, emoji icons, hover effects
 * - Mobile: Scrollable drawer with section headers and complete category list
 * - Fixed positioning with appropriate z-index for layering
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current search query text
 * @param {Function} props.setSearchTerm - State setter for search query
 * @param {string} props.selectedDiet - Currently selected diet filter (e.g., "Vegetarian")
 * @param {Function} props.setSelectedDiet - State setter for diet filter
 * @param {string} props.selectedCategory - Currently selected cuisine category (e.g., "mexican")
 * @param {Function} props.setSelectedCategory - State setter for category filter
 * @returns {JSX.Element} Fixed navigation bar with search and filtering controls
 */
export const Navbar = ({
  searchTerm,
  setSearchTerm,
  selectedDiet,
  setSelectedDiet,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogoClick = () => {
    setSearchTerm("");
    setSelectedDiet("");
    setSelectedCategory("");
  };

  return (
    <Box
      as="header"
      bg="rgba(229, 62, 62, 0.8)"
      backdropFilter="blur(10px)"
      sx={{
        WebkitBackdropFilter: "blur(10px)",
      }}
      px={{ base: 2, lg: 6 }}
      py={{ base: 2, md: 2.5 }}
      boxShadow="0 4px 16px rgba(0, 0, 0, 0.1)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={Z_INDEX.navbar}
      borderBottom="1px solid white"
    >
      {/* Desktop Layout */}
      <Flex
        align="center"
        justify="space-between"
        display={{ base: "none", lg: "flex" }}
        position="relative"
      >
        <Link to="/" onClick={handleLogoClick}>
          <Image
            src="/recipes-logo.svg"
            alt="Recipes Logo"
            h="60px"
            filter="drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"
          />
        </Link>

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes…"
          size="sm"
          maxW={SPACING.menu.dropdown.maxWidth}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          _placeholder={{ color: "#E53E3E", fontWeight: "bold" }}
          borderWidth="2px"
          borderColor="#FFD700"
          aria-label="Search recipes by name"
        />

        <Box mr={16}>
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              bg="#FFD700"
              color="#E53E3E"
              rightIcon={<ChevronDownIcon />}
              aria-label="Browse recipe categories"
            >
              {selectedCategory || "Categories"}
            </MenuButton>
            <MenuList
              bg="white"
              maxH={SPACING.menu.dropdown.maxHeight}
              overflowY="auto"
              py={2}
              border="2px solid #FFD700"
              boxShadow="0 8px 24px rgba(229, 62, 62, 0.15)"
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
              >
                🍜 Thai
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedCategory("korean");
                  setSearchTerm("");
                  setSelectedDiet("");
                }}
                _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                pl={6}
              >
                🥘 Korean
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setSelectedCategory("chinese");
                  setSearchTerm("");
                  setSelectedDiet("");
                }}
                _hover={{ bg: "rgba(255, 215, 0, 0.2)" }}
                pl={6}
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
              >
                💝 Valentine&apos;s Day
              </MenuItem>

              {/* Meals */}
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
              >
                🍿 Snacks
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      {/* Mobile Layout */}
      <Box display={{ base: "block", lg: "none" }}>
        <Flex align="center" justify="center" mb={2} position="relative">
          <Link to="/" onClick={handleLogoClick}>
            <Box
              as="img"
              src="/recipes-logo.svg"
              alt="Recipes"
              h={{ base: "70px", sm: "75px" }}
              cursor="pointer"
              filter="drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"
            />
          </Link>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            bg="#FFD700"
            color="#E53E3E"
            size="sm"
            aria-label="Open menu"
            position="absolute"
            right="0"
          />
        </Flex>

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes…"
          h="38px"
          fontSize="16px"
          bg="white"
          _placeholder={{ color: "#E53E3E", fontWeight: "bold" }}
          borderWidth="2px"
          borderColor="#FFD700"
        />
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#E53E3E" color="white">
          <DrawerCloseButton color="#FFD700" />
          <DrawerHeader borderBottomWidth="1px" borderColor="#FFD700">
            Menu
          </DrawerHeader>
          <DrawerBody overflowY="auto">
            <VStack spacing={4} align="stretch">
              {/* All Recipes */}
              <Box>
                <Button
                  w="100%"
                  mb={2}
                  bg="#FFD700"
                  color="#E53E3E"
                  _hover={{ bg: "#FFC107" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchTerm("");
                    setSelectedDiet("");
                    onClose();
                  }}
                >
                  All Recipes
                </Button>
              </Box>

              {/* World Cuisines Section */}
              <Box borderTop="1px solid #FFD700" pt={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🌍 World Cuisines
                </Box>
                {[
                  "mexican",
                  "italian",
                  "indian",
                  "thai",
                  "korean",
                  "chinese",
                  "japanese",
                  "french",
                  "american",
                ].map((category) => (
                  <Button
                    key={category}
                    w="100%"
                    mb={2}
                    variant={
                      selectedCategory === category ? "solid" : "outline"
                    }
                    bg={
                      selectedCategory === category ? "#FFD700" : "transparent"
                    }
                    color={
                      selectedCategory === category ? "#E53E3E" : "#FFD700"
                    }
                    borderColor="#FFD700"
                    _hover={{
                      bg:
                        selectedCategory === category
                          ? "#FFC107"
                          : "rgba(255, 215, 0, 0.1)",
                    }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchTerm("");
                      setSelectedDiet("");
                      onClose();
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </Box>

              {/* Popular Section */}
              <Box borderTop="1px solid #FFD700" pt={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🔥 Popular
                </Box>
                {[
                  { label: "Soup Recipes", value: "soup" },
                  { label: "Chili Recipes", value: "chili" },
                  { label: "Pasta Recipes", value: "pasta" },
                  { label: "Salad Recipes", value: "salad" },
                  { label: "Bread Recipes", value: "bread" },
                  { label: "Cookie Recipes", value: "cookie" },
                ].map((item) => (
                  <Button
                    key={item.value}
                    w="100%"
                    mb={2}
                    variant="outline"
                    color="#FFD700"
                    borderColor="#FFD700"
                    _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm(item.value);
                      setSelectedDiet("");
                      onClose();
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Healthy & Diet Section */}
              <Box borderTop="1px solid #FFD700" pt={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🥗 Healthy & Diet
                </Box>
                <Button
                  w="100%"
                  mb={2}
                  variant="outline"
                  color="#FFD700"
                  borderColor="#FFD700"
                  _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchTerm("keto");
                    setSelectedDiet("");
                    onClose();
                  }}
                >
                  Keto Recipes
                </Button>
                <Button
                  w="100%"
                  mb={2}
                  variant="outline"
                  color="#FFD700"
                  borderColor="#FFD700"
                  _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchTerm("healthy");
                    setSelectedDiet("");
                    onClose();
                  }}
                >
                  Healthy Recipes
                </Button>
                {["Vegetarian", "Vegan", "Pescatarian"].map((diet) => (
                  <Button
                    key={diet}
                    w="100%"
                    mb={2}
                    variant={selectedDiet === diet ? "solid" : "outline"}
                    bg={selectedDiet === diet ? "#FFD700" : "transparent"}
                    color={selectedDiet === diet ? "#E53E3E" : "#FFD700"}
                    borderColor="#FFD700"
                    _hover={{
                      bg:
                        selectedDiet === diet
                          ? "#FFC107"
                          : "rgba(255, 215, 0, 0.1)",
                    }}
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedDiet(diet);
                      setSearchTerm("");
                      onClose();
                    }}
                  >
                    {diet} Recipes
                  </Button>
                ))}
                <Button
                  w="100%"
                  mb={2}
                  variant="outline"
                  color="#FFD700"
                  borderColor="#FFD700"
                  _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                  onClick={() => {
                    setSelectedCategory("");
                    setSearchTerm("gluten free");
                    setSelectedDiet("");
                    onClose();
                  }}
                >
                  Gluten-Free Recipes
                </Button>
              </Box>

              {/* Holidays Section */}
              <Box borderTop="1px solid #FFD700" pt={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🎉 Holidays
                </Box>
                {[
                  { label: "Thanksgiving", value: "thanksgiving" },
                  { label: "Christmas", value: "christmas" },
                  { label: "Halloween", value: "halloween" },
                  { label: "Easter", value: "easter" },
                  { label: "Valentine's Day", value: "valentine" },
                ].map((item) => (
                  <Button
                    key={item.value}
                    w="100%"
                    mb={2}
                    variant="outline"
                    color="#FFD700"
                    borderColor="#FFD700"
                    _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm(item.value);
                      setSelectedDiet("");
                      onClose();
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Meal Types Section */}
              <Box borderTop="1px solid #FFD700" pt={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🍽️ Meal Types
                </Box>
                {[
                  { label: "Breakfast", value: "breakfast" },
                  { label: "Lunch", value: "lunch" },
                  { label: "Dinner", value: "dinner" },
                  { label: "Desserts", value: "dessert" },
                  { label: "Drinks", value: "drink" },
                  { label: "Snacks", value: "snack" },
                ].map((item) => (
                  <Button
                    key={item.value}
                    w="100%"
                    mb={2}
                    variant="outline"
                    color="#FFD700"
                    borderColor="#FFD700"
                    _hover={{ bg: "rgba(255, 215, 0, 0.1)" }}
                    onClick={() => {
                      setSelectedCategory("");
                      setSearchTerm(item.value);
                      setSelectedDiet("");
                      onClose();
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Diet Filters Section */}
              <Box borderTop="1px solid #FFD700" pt={4} pb={4}>
                <Box mb={2} fontSize="sm" color="#FFD700" fontWeight="bold">
                  🌱 Additional Diet Filters
                </Box>
                <Button
                  w="100%"
                  mb={2}
                  variant={selectedDiet === "Pescatarian" ? "solid" : "outline"}
                  bg={
                    selectedDiet === "Pescatarian" ? "#FFD700" : "transparent"
                  }
                  color={selectedDiet === "Pescatarian" ? "#E53E3E" : "#FFD700"}
                  borderColor="#FFD700"
                  _hover={{
                    bg:
                      selectedDiet === "Pescatarian"
                        ? "#FFC107"
                        : "rgba(255, 215, 0, 0.1)",
                  }}
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedDiet(
                      selectedDiet === "Pescatarian" ? "" : "Pescatarian"
                    );
                    setSearchTerm("");
                    onClose();
                  }}
                >
                  Pescatarian
                </Button>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

Navbar.propTypes = {
  /** Current search query text */
  searchTerm: PropTypes.string.isRequired,
  /** State setter function for search query */
  setSearchTerm: PropTypes.func.isRequired,
  /** Currently selected diet filter (empty string when none selected) */
  selectedDiet: PropTypes.string.isRequired,
  /** State setter function for diet filter */
  setSelectedDiet: PropTypes.func.isRequired,
  /** Currently selected cuisine category (empty string when none selected) */
  selectedCategory: PropTypes.string.isRequired,
  /** State setter function for category filter */
  setSelectedCategory: PropTypes.func.isRequired,
};
