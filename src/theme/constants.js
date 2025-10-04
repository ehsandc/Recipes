/**
 * Design System Constants
 * Centralized design tokens for consistent styling across the application
 */

// Color Palette
export const COLORS = {
  // Primary Colors
  primary: {
    gold: "#FFD700",
    goldHover: "#FFC107",
    red: "#E53E3E",
    redDark: "#C53030",
    redDarker: "#9B2C2C",
  },

  // Neutral Colors
  white: "#FFFFFF",
  black: "#000000",

  // Semantic Colors
  background: {
    main: "#FFD700",
    card: "#FFFFFF",
  },
};

// Gradient Definitions
export const GRADIENTS = {
  hero: "linear-gradient(135deg, #E53E3E 0%, #C53030 50%, #9B2C2C 100%)",
  redGlass: "rgba(229, 62, 62, 0.8)",
};

// Spacing & Layout
export const SPACING = {
  navbar: {
    height: {
      mobile: "120px",
      desktop: "80px",
    },
  },
  card: {
    height: "450px",
    imageHeight: "220px",
  },
  menu: {
    dropdown: {
      maxHeight: "500px",
      maxWidth: "300px",
    },
  },
};

// Breakpoints (matching Chakra UI defaults)
export const BREAKPOINTS = {
  base: "0em", // 0px
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

// Shadow Effects
export const SHADOWS = {
  card: "0 0 15px rgba(255, 215, 0, 0.4)",
  cardHover: "0 0 25px rgba(255, 215, 0, 0.7)",
  navbar: "0 4px 16px rgba(0, 0, 0, 0.1)",
  logo: "drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.9))",
};

// Animation & Transitions
export const TRANSITIONS = {
  default: "all 0.3s",
  fast: "all 0.2s",
};

// Z-Index Layers
export const Z_INDEX = {
  navbar: 1000,
  modal: 2000,
  tooltip: 3000,
};

// Category Configuration
export const CATEGORY_DATA = [
  // Meal Types
  { emoji: "🍳", label: "Breakfast", type: "search", value: "breakfast" },
  { emoji: "🥪", label: "Lunch", type: "search", value: "lunch" },
  { emoji: "🍽️", label: "Dinner", type: "search", value: "dinner" },
  { emoji: "🍰", label: "Desserts", type: "search", value: "dessert" },
  { emoji: "🍹", label: "Drinks", type: "search", value: "drink" },

  // Popular
  { emoji: "🍲", label: "Soup", type: "search", value: "soup" },
  { emoji: "🍝", label: "Pasta", type: "search", value: "pasta" },
  { emoji: "🥗", label: "Salad", type: "search", value: "salad" },

  // Healthy & Diet
  { emoji: "🌱", label: "Vegetarian", type: "diet", value: "Vegetarian" },
  { emoji: "🥬", label: "Vegan", type: "diet", value: "Vegan" },
  { emoji: "🥑", label: "Keto", type: "search", value: "keto" },

  // Holidays
  { emoji: "🦃", label: "Thanksgiving", type: "search", value: "thanksgiving" },
  { emoji: "🎄", label: "Christmas", type: "search", value: "christmas" },
  { emoji: "🎃", label: "Halloween", type: "search", value: "halloween" },

  // Cuisines
  { emoji: "🌮", label: "Mexican", type: "category", value: "mexican" },
  { emoji: "🍕", label: "Italian", type: "category", value: "italian" },
  { emoji: "🥡", label: "Chinese", type: "category", value: "chinese" },
  { emoji: "🍛", label: "Indian", type: "category", value: "indian" },
  { emoji: "🍜", label: "Thai", type: "category", value: "thai" },
  { emoji: "🍱", label: "Japanese", type: "category", value: "japanese" },
];
