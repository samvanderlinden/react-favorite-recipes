import React, { Component } from 'react';
import RecipeList from './RecipeListComponent/RecipeList';
import { v4 as uuid4 } from 'uuid';

class RecipeContiner extends Component {
    constructor(props) {
        super(props);
        this.state = { //PUT STATE IN 'RecipeContainer' COMPONENT?
            recipes: [ //INITIALIZE 'recipes' TO EMPTY ARRAY
                {
                    id: uuid4(),
                    title: 'Mustard chicken',
                    ingredients: [{ item: 'Chicken' }],
                    summary: 'So good'
                },
                {
                    id: uuid4(),
                    title: 'Oatmeal',
                    ingredients: [{ item: 'Oats' }, { item: 'Peanut butter' }],
                    summary: 'Energy meal'
                }
            ]
        }
    }

    render() {
        return (
            <RecipeList 
            recipes = {this.state.recipes}/>
        )
    }

}

export default RecipeContiner;