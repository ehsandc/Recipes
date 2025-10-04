/**
 * String Slug Utility
 * Converts a string into a URL-friendly slug format
 */

/**
 * Converts a string to a URL-friendly slug
 *
 * @param {string} s - Input string to convert
 * @returns {string} Slugified string (lowercase, hyphenated, alphanumeric)
 *
 * @example
 * toSlug("Chicken Tikka Masala!") // returns "chicken-tikka-masala"
 * toSlug("Pasta & Sauce") // returns "pasta-sauce"
 */
export const toSlug = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
