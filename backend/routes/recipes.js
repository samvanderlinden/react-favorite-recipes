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

// @route   UPDATE /recipes/:id
// @desc    UPDATE recipe at given id
// @access  Public
router.put('/:id', (req, res) => {
    Recipes.findById(req.params.id)
    .then(recipe => {
        console.log(recipe);
        recipe.title = req.body.title;
        recipe.ingredients = req.body.ingredients;
        recipe.summary = req.body.summary;
        recipe.save()
        .then(() => res.json(`Recipe ${recipe} updated`))
        .catch(err => res.status(400))
    })
    .catch(err => res.status(400).json('Error:' + err));
})

module.exports = router;

