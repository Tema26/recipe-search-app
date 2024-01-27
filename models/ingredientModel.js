// models/ingredientModel.js
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
   name: { type: String, required: true },
   category: { type: String, required: true },
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
