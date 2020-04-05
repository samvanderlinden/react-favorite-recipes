import React, { Component } from 'react';
import RecipeList from './RecipeListComponent/RecipeList';
import { v4 as uuid4 } from 'uuid';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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

    onChangeHandler = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                 </Fab>
                <RecipeList recipes = {this.state.recipes}/>
                
                {/* <form>
                    <label>
                        Title:
                        <input type="text" onChange={this.onChangeHandler} />
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}
                
            </div>
        );
    }

}

export default RecipeContiner;