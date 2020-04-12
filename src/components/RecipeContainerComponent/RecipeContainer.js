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
                    <input type="submit" value="Submit" />
                </form>
                <RecipeList recipes={this.state.recipes} />
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

            </div>
        );
    }

}

export default RecipeContiner;