import { Box, Image, Text, HStack, Flex, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { memo } from "react";
import PropTypes from "prop-types";
import { toSlug } from "../utils/slug";
import { COLORS, SHADOWS, SPACING } from "../theme/constants";

/**
 * RecipeCard Component
 * Displays a recipe preview card with image, title, and key information
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.recipe - Recipe data object from Edamam API
 * @returns {JSX.Element} Interactive recipe card with hover effects
 */
const RecipeCard = ({ recipe }) => {
  const slug = toSlug(recipe.label);
  return (
    <Link to={`/recipe/${slug}`}>
      <Box
        bg={COLORS.white}
        borderRadius="xl"
        overflow="hidden"
        transition="all .2s"
        display="flex"
        flexDir="column"
        border={`3px solid ${COLORS.white}`}
        boxShadow={SHADOWS.card}
        _hover={{
          transform: "scale(1.02)",
          boxShadow: SHADOWS.cardHover,
        }}
        h={SPACING.card.height}
        w="100%"
      >
        <Box position="relative">
          <Image
            src={recipe.image}
            alt={recipe.label}
            loading="lazy"
            w="100%"
            h={SPACING.card.imageHeight}
            objectFit="cover"
          />
        </Box>
        <Box p={4} display="flex" flexDir="column" gap={2}>
          <Text fontSize="2xl" fontWeight="semibold" noOfLines={2}>
            {recipe.label}
          </Text>
          <HStack spacing={3}>
            <Text fontWeight="bold">Meal:</Text>
            <Text noOfLines={1}>{recipe.mealType?.[0] || "—"}</Text>
          </HStack>
          <HStack spacing={3}>
            <Text fontWeight="bold">Dish:</Text>
            <Text noOfLines={1}>{recipe.dishType?.[0] || "—"}</Text>
          </HStack>
          {/* Diet labels */}
          {recipe.dietLabels?.length > 0 && (
            <Flex gap={2} wrap="wrap">
              {recipe.dietLabels.map((l) => (
                <Tag key={l} colorScheme="green" size="sm">
                  {l}
                </Tag>
              ))}
            </Flex>
          )}
          {/* Caution tags */}
          {recipe.cautions?.length > 0 && (
            <Flex gap={2} wrap="wrap">
              {recipe.cautions.map((c) => (
                <Tag key={c} colorScheme="red" size="sm">
                  {c}
                </Tag>
              ))}
            </Flex>
          )}
        </Box>
      </Box>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string),
    dishType: PropTypes.arrayOf(PropTypes.string),
    dietLabels: PropTypes.arrayOf(PropTypes.string),
    cautions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

// Export memoized version for performance optimization
export default memo(RecipeCard);
