import React, { Component } from 'react';
import RecipeList from './RecipeListComponent/RecipeList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import '../../App.css';

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

    //UPDATE RECIPE
    updateRecipe = (id) => {

        console.log('update button pressed for item id', id);
        const recipe = {
            title: this.state.title,
            ingredients: this.state.ingredients,
            summary: this.state.ingredients
        }
    
        // const url = `http://localhost:5000/recipes/${id}`;
        // axios.put(url, recipe)
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));

    }

    render() {
        return (
            <div className="recipe-container">
                <form className = "form-container" onSubmit={this.onSubmitHandler}>
                    <TextField className = "form-item" type="text" onChange={this.onChangeHandler} name="title" id="standard-basic" label="Title" />
                    <TextField className = "form-item" type="text" onChange={this.onChangeHandler} name="ingredients" id="standard-basic" label="Ingredients" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Cooking directions"
                        multiline
                        rows={6}
                        variant="outlined"
                        onChange={this.onChangeHandler} 
                        name="summary"
                        className = "form-item"
                    />
                    <Fab color="primary" aria-label="add" type="submit">
                        <AddIcon />
                    </Fab>
                </form>
                <RecipeList 
                    recipes={this.state.recipes} 
                    deleteRecipe={this.deleteRecipe}
                    updateRecipe={this.updateRecipe}
                />
                
            </div>
        );
    }

}

export default RecipeContiner;