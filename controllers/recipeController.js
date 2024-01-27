// controllers/recipeController.js

import Recipe, { find, findById } from '../models/Recipe'; // Assuming you have a Recipe model

// Get all recipes
const getAllRecipes = async (req, res) => {
   try {
      const recipes = await find();
      res.json(recipes);
   } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Get a specific recipe by ID
const getRecipeById = async (req, res) => {
   const recipeId = req.params.id;

   try {
      const recipe = await findById(recipeId);
      if (!recipe) {
         res.status(404).json({ error: 'Recipe not found' });
         return;
      }

      res.json(recipe);
   } catch (error) {
      console.error('Error fetching recipe by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Create a new recipe
const createRecipe = async (req, res) => {
   const { title, ingredients, instructions } = req.body;

   // Basic validation
   if (!title || !ingredients || !instructions) {
      res.status(400).json({
         error: 'Title, ingredients, and instructions are required',
      });
      return;
   }

   try {
      const newRecipe = new Recipe({ title, ingredients, instructions });
      await newRecipe.save();

      res.status(201).json(newRecipe);
   } catch (error) {
      console.error('Error creating recipe:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

export default {
   getAllRecipes,
   getRecipeById,
   createRecipe,
};
