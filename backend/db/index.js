import Recipes from './models/Recipes.js';
import mongoose from 'mongoose';

export function connectToDb() {
   mongoose.connect(process.env.DB_URL);

   const getRecipes = async () => {
      const recipesCollection = await Recipes.find({}).select('-_id').exec();
      console.log(recipesCollection);
   };
   getRecipes();
}
