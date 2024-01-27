// routes/ingredientRoutes.js
import express from 'express';
const router = express.Router();
import IngredientController from '../controllers/ingredientController';

// Define ingredient routes
router.get('/ingredients', IngredientController.getAllIngredients);
router.get('/ingredients/:id', IngredientController.getIngredientById);
router.post('/ingredients', IngredientController.createIngredient);

export default ingredientRoutes;
