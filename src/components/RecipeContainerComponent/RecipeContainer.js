import React, { Component } from 'react';
import RecipeList from './RecipeListComponent/RecipeList';
import { v4 as uuid4 } from 'uuid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

class RecipeContiner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "",
            title: "",
            ingredients: "",
            summary: "",
            recipes: [] //PUT STATE IN 'RecipeContainer' COMPONENT?
            // recipes: [ //INITIALIZE 'recipes' TO EMPTY ARRAY
            //     {
            //         id: uuid4(),
            //         title: 'Mustard chicken',
            //         ingredients: [{ item: 'Chicken' }],
            //         summary: 'So good'
            //     },
            //     {
            //         id: uuid4(),
            //         title: 'Oatmeal',
            //         ingredients: [{ item: 'Oats' }, { item: 'Peanut butter' }],
            //         summary: 'Energy meal'
            //     }
            // ]
        }

    }
    //GET RECIPES
    componentDidMount() {
        const url = 'http://localhost:5000/recipes/';
        axios.get(url)
            .then((res) => {
                this.setState({ recipes: res.data })
            }).catch(err => {
                console.log(err);
            });
    }

    onChangeHandler = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const obj = {
            id: uuid4(),
            title: this.state.title,
        }
        this.setState({
            recipes: [...this.state.recipes, obj],
        }, () =>  console.log('onSubmitHandler console logs second'));
        e.target.reset();
       
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        Value:
                            <input type="text" onChange={this.onChangeHandler} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <RecipeList 
                recipes = {this.state.recipes}/>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                 </Fab>
                
            </div>
        );
    }

}

export default RecipeContiner;