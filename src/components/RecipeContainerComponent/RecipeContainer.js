import React, { Component } from 'react';
import RecipeList from './RecipeListComponent/RecipeList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

class RecipeContiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            ingredients: "",
            summary: "",
            recipes: []
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
        this.setState({ [e.target.name]: e.target.value })
    }

    //POST RECIPE
    onSubmitHandler = (e) => {
        e.preventDefault();
        const recipe = {
            title: this.state.title,
            ingredients: this.state.ingredients,
            summary: this.state.summary
        }

        const url = 'http://localhost:5000/recipes/add';

        axios.post(url, recipe)
            .then(res => this.setState({
                recipes: [...this.state.recipes, res.data],
            }, () => console.log('new recipe!', res.data)));

        e.target.reset();

    }

    //DELETE RECIPE
    deleteRecipe = (id) => {
        console.log('deleteRecipe clicked');
        const url = `http://localhost:5000/recipes/${id}`;
        axios.delete(url)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        this.setState({ recipes: this.state.recipes.filter(el => el._id !== id) });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>Title:</label>
                    <input type="text" onChange={this.onChangeHandler} name="title" />
                    <label>Ingredients:</label>
                    <input type="text" onChange={this.onChangeHandler} name="ingredients" />
                    <label>Summary:</label>
                    <input type="text" onChange={this.onChangeHandler} name="summary" />
                    <Fab color="primary" aria-label="add" type="submit">
                        <AddIcon />
                    </Fab>
                </form>
                <RecipeList 
                recipes={this.state.recipes} 
                deleteRecipe={this.deleteRecipe}/>
                
            </div>
        );
    }

}

export default RecipeContiner;