import {
  Box,
  Flex,
  Input,
  Button,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Z_INDEX } from "../theme/constants";

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
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

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
        justify="center"
        display={{ base: "none", lg: "flex" }}
        position="relative"
      >
        <Box position="absolute" left={6}>
          <IconButton
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            }
            onClick={onSearchOpen}
            bg="transparent"
            color="#FFD700"
            size="sm"
            aria-label="Open search"
            _hover={{ bg: "rgba(255,255,255,0.08)" }}
          />
        </Box>
        <Link to="/" onClick={handleLogoClick}>
          <Image
            src={`${import.meta.env.BASE_URL}recipes-logo.svg`}
            alt="Recipes Logo"
            h="60px"
            filter="drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"
          />
        </Link>
        <Box
          position="absolute"
          right={6}
          display="flex"
          alignItems="center"
          gap={4}
        >
          <IconButton
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <line x1="6" y1="10" x2="26" y2="10" />
                <line x1="6" y1="16" x2="26" y2="16" />
                <line x1="6" y1="22" x2="26" y2="22" />
              </svg>
            }
            onClick={onOpen}
            bg="transparent"
            color="#FFD700"
            size="sm"
            aria-label="Open menu"
            _hover={{ bg: "rgba(255,255,255,0.08)" }}
          />
        </Box>
      </Flex>

      {/* Mobile Layout */}
      <Box display={{ base: "block", lg: "none" }}>
        <Flex align="center" justify="center" position="relative">
          <IconButton
            icon={
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            }
            onClick={onSearchOpen}
            bg="transparent"
            color="#FFD700"
            size="sm"
            aria-label="Open search"
            position="absolute"
            left="0"
            _hover={{ bg: "rgba(255,255,255,0.08)" }}
          />
          <Link to="/" onClick={handleLogoClick}>
            <Box
              as="img"
              src={`${import.meta.env.BASE_URL}recipes-logo.svg`}
              alt="Recipes"
              h={{ base: "70px", sm: "75px" }}
              cursor="pointer"
              filter="drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))"
            />
          </Link>
          <IconButton
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <line x1="6" y1="10" x2="26" y2="10" />
                <line x1="6" y1="16" x2="26" y2="16" />
                <line x1="6" y1="22" x2="26" y2="22" />
              </svg>
            }
            onClick={onOpen}
            bg="transparent"
            color="#FFD700"
            size="sm"
            aria-label="Open menu"
            position="absolute"
            right="0"
            _hover={{ bg: "rgba(255,255,255,0.08)" }}
          />
        </Flex>

        {/* Search Modal for Mobile */}
        <Modal isOpen={isSearchOpen} onClose={onSearchClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search Recipes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                autoFocus
                mb={3}
              />
              <Button
                w="100%"
                bg="#FFD700"
                color="#E53E3E"
                _hover={{ bg: "#FFC107" }}
                onClick={onSearchClose}
                fontWeight="bold"
              >
                Search
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
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
