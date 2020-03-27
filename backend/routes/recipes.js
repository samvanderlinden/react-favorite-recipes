const router = require('express').Router();

// Recipes Model
let Recipes = require('../models/recipes.model');

// @route   GET /recipes
// @desc    GET all recipes
// @access  Public
router.get('/', (req, res) => {
    Recipes.find()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => res.status(400).json('Error:' + err));
});

// @route   POST /recipes/add
// @desc    CREATE new recipe
// @access  Public
router.post('/add',(req, res) => {
    const recipe = req.body;
    console.log('new recipe', recipe);
    const newRecipe = new Recipes(recipe);

    newRecipe.save()
        .then((recipe) => res.json(recipe))
        .catch(err => res.status(400).json('Error:' + err));
});

// @route   DELETE /recipes/:id
// @desc    DELETE recipe at given id
// @access  Public
router.delete('/:id',(req, res) => {
    console.log(req.params.id);
    console.log('req', req);
    Recipes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe Deleted'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;

