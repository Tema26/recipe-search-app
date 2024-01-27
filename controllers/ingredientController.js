// controllers/ingredientController.js

import Ingredient, { find, findById } from '../models/ingredientModel'; // Assuming you have an Ingredient model

// Get all ingredients
const getAllIngredients = async (req, res) => {
   try {
      const ingredients = await find();
      res.json(ingredients);
   } catch (error) {
      console.error('Error fetching ingredients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Get a specific ingredient by ID
const getIngredientById = async (req, res) => {
   const ingredientId = req.params.id;

   try {
      const ingredient = await findById(ingredientId);
      if (!ingredient) {
         res.status(404).json({ error: 'Ingredient not found' });
         return;
      }

      res.json(ingredient);
   } catch (error) {
      console.error('Error fetching ingredient by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Create a new ingredient
const createIngredient = async (req, res) => {
   const { name, category } = req.body;

   // Basic validation
   if (!name || !category) {
      res.status(400).json({ error: 'Name and category are required' });
      return;
   }

   try {
      const newIngredient = new Ingredient({ name, category });
      await newIngredient.save();

      res.status(201).json(newIngredient);
   } catch (error) {
      console.error('Error creating ingredient:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

export default {
   getAllIngredients,
   getIngredientById,
   createIngredient,
};
