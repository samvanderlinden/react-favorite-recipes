const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: String,
    ingredients: [{item: String, amount: String}],
    summary: String
});

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports = Recipes;