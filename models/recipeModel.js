// models/recipeModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
   title: { type: String, required: true },
   ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
   instructions: { type: String, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
