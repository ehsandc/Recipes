import { Box, Container, Flex, Text, Link, Stack } from "@chakra-ui/react";

/**
 * Footer Component
 * Site-wide footer with branding, navigation links, and social media
 *
 * Features:
 * - 4-column responsive layout (Brand, Quick Links, Categories, Connect)
 * - Dynamic copyright year calculation
 * - Gold accent colors matching site theme
 * - Red gradient background matching hero section
 * - Social media emoji links (Facebook, Instagram, Twitter)
 * - Hover effects on all interactive elements
 * - Responsive: stacks vertically on mobile, horizontal on desktop
 *
 * Design:
 * - Background gradient: linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)
 * - Accent color: #FFD700 (gold)
 * - Hover transitions on links
 * - Divider line at bottom section
 *
 * @component
 * @returns {JSX.Element} Footer with branding, links, and copyright information
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)"
      color="white"
      py={8}
      mt="auto"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          gap={6}
        >
          {/* Brand Section */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="2xl" fontWeight="bold" color="#FFD700" mb={2}>
              🍳 Recipes
            </Text>
            <Text fontSize="sm" maxW="300px">
              Discover amazing recipes from around the world. Cook, share, and
              enjoy!
            </Text>
          </Box>

          {/* Quick Links */}
          <Stack spacing={2} textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight="bold" color="#FFD700" mb={1}>
              Quick Links
            </Text>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              Contact
            </Link>
          </Stack>

          {/* Categories */}
          <Stack spacing={2} textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight="bold" color="#FFD700" mb={1}>
              Popular Categories
            </Text>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              World Cuisines
            </Link>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              Healthy Recipes
            </Link>
            <Link
              href="#"
              _hover={{ color: "#FFD700", textDecoration: "none" }}
            >
              Holiday Specials
            </Link>
          </Stack>

          {/* Social & Info */}
          <Stack spacing={2} textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight="bold" color="#FFD700" mb={1}>
              Connect With Us
            </Text>
            <Text fontSize="sm">📧 info@recipes.com</Text>
            <Text fontSize="sm">📱 Follow us on social media</Text>
            <Flex gap={3} justify={{ base: "center", md: "flex-start" }} mt={2}>
              <Link href="#" fontSize="xl" _hover={{ color: "#FFD700" }}>
                📘
              </Link>
              <Link href="#" fontSize="xl" _hover={{ color: "#FFD700" }}>
                📷
              </Link>
              <Link href="#" fontSize="xl" _hover={{ color: "#FFD700" }}>
                🐦
              </Link>
            </Flex>
          </Stack>
        </Flex>

        {/* Bottom Bar */}
        <Box
          mt={8}
          pt={6}
          borderTop="1px solid rgba(255, 215, 0, 0.3)"
          textAlign="center"
        >
          <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)">
            © {currentYear} Recipes. All rights reserved. Made with ❤️ for food
            lovers.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
