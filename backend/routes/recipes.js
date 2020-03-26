const router = require('express').Router();
let Recipes = require('../models/recipes.model');

router.route('/').get((req, res) => {
    Recipes.find()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    console.log('recipe req object: ', req);
    const recipe = req.body;
    console.log('new recipe', recipe);
    const newRecipe = new Recipes(recipe);

    newRecipe.save()
        .then(() => res.json('Recipe Added!!!'))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
    console.log(req.params.id);
    console.log('req', req);
    Recipes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe Deleted'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;

