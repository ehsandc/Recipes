/**
 * Recipe Schema Helper
 * Generates JSON-LD structured data for recipe SEO
 */

/**
 * Generates Schema.org Recipe structured data
 *
 * @param {Object} recipe - Recipe object from Edamam API
 * @param {string} recipe.label - Recipe name
 * @param {string} recipe.image - Recipe image URL
 * @param {string[]} recipe.ingredientLines - List of ingredients
 * @param {string[]} [recipe.cuisineType] - Cuisine types
 * @param {string[]} [recipe.dishType] - Dish types
 * @param {string[]} [recipe.dietLabels] - Diet labels
 * @param {number} [recipe.yield] - Number of servings
 * @returns {Object} JSON-LD structured data object
 */
export const generateRecipeSchema = (recipe) => {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.label,
    image: [recipe.image],
    description: `${recipe.label} – ingredients and labels.`,
    recipeIngredient: recipe.ingredientLines,
    recipeCuisine: recipe.cuisineType?.[0],
    recipeCategory: recipe.dishType?.[0],
    suitableForDiet: recipe.dietLabels?.join(", "),
    recipeYield: recipe.yield,
  };
};
