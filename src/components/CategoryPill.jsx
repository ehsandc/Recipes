import { Text } from "@chakra-ui/react";
import { memo } from "react";
import PropTypes from "prop-types";

/**
 * CategoryPill Component
 * A reusable, interactive pill button for category selection
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.emoji - Emoji icon for the category
 * @param {string} props.label - Display text for the category
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} Rendered category pill
 */
const CategoryPill = ({ emoji, label, onClick }) => {
  return (
    <Text
      bg="rgba(255,255,255,0.2)"
      px={3}
      py={1}
      borderRadius="full"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{
        bg: "rgba(255,255,255,0.3)",
        transform: "translateY(-2px)",
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Filter by ${label}`}
    >
      {emoji} {label}
    </Text>
  );
};

CategoryPill.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Export memoized version for performance optimization
export default memo(CategoryPill);
