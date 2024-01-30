import mongoose from 'mongoose';

// // Create interface
// export interface IRecipes {
//   title: string,
//   instructions: string,
//   ingredients: []
// }

// export interface IRecipe extends IRecipes {
//   id: string,
// }

// Create mongodb Schema
export const recipesSchema = new mongoose.Schema({
   id: { type: String, required: true, index: true, unique: true },
   title: { type: String, required: true },
   instructions: { type: String, required: true },
   ingredients: { String: [] },
});

// Create & export mongoDB model
const Recipes = mongoose.model('Recipe', recipesSchema);

export default Recipes;
