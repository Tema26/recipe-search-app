import Recipes from './models/Recipes.js';
import mongoose from 'mongoose';

export function connectToDb() {
   mongoose.connect('mongodb://0.0.0.0:27017/recipeApp');

   const getRecipes = async () => {
      const recipesCollection = await Recipes.find({}).select('-_id').exec();
      console.log(recipesCollection);
   };
   getRecipes();
}
