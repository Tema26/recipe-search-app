// routes/recipeRoutes.js
import express from 'express';
import RecipeController from '../controllers/recipeController';
const router = express.Router();

// Define recipe routes
router.get('/recipes', RecipeController.getAllRecipes);
router.get('/recipes/:id', RecipeController.getRecipeById);
router.post('/recipes', RecipeController.createRecipe);

export default recipeRoutes;
