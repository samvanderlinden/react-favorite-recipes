import React, { Component } from 'react';
import Swal from 'sweetalert2';
import AddRecipeModal from './AddRecipeComponent/AddRecipeModal';
import RecipeList from './RecipeListComponent/RecipeList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import '../../App.css';

const style = {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: '-110px',
    left: '10px'
}

const inputStyle = {
    marginTop : '15px'
}

class RecipeContiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            ingredients: "",
            summary: "",
            recipes: [],
            open: false
        }

    }

    handleClickOpen = () => {
        console.log('handleClickOpen was clicked');
        this.setState({ open: true });
    }

    handleClickClose = () => {
        console.log('handleClickClose was clicked');
        this.setState({ open: false });
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
                open: false
            }, () => console.log('new recipe!', res.data)));

        Swal.fire({
            icon: 'success',
            title: 'You successfully added a new recipe!'
        })

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

        const url = `http://localhost:5000/recipes/${id}`;
        axios.put(url, recipe)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        console.log('styling props', style);
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Click to add recipe
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Recipe</DialogTitle>
                    <form className="form-container" onSubmit={this.onSubmitHandler}>
                        <TextField style={inputStyle} className="form-input-title" type="text" onChange={this.onChangeHandler} name="title" id="standard-basic" label="Title" />
                        <TextField style={inputStyle} className="form-input-ingredients" type="text" onChange={this.onChangeHandler} name="ingredients" id="standard-basic" label="Ingredients" />
                        <TextField
                            id="outlined-multiline-static"
                            label="Directions"
                            multiline
                            rows={6}
                            variant="outlined"
                            onChange={this.onChangeHandler}
                            name="summary"
                            className="form-input-directions"
                            style={inputStyle}
                        />
                        <Fab style={style} className="add-recipe-button" color="primary" aria-label="add" type="submit">
                            <AddIcon />
                        </Fab>
                    </form>
                    <DialogActions>
                        <Fab color="secondary" aria-label="cancel">
                            <CancelIcon />
                        </Fab>
                    </DialogActions>
                </Dialog>
                <RecipeList
                    recipes={this.state.recipes}
                    deleteRecipe={this.deleteRecipe}
                    updateRecipe={this.updateRecipe}
                    // open={this.state.open}
                    // openDialog={this.handleClickOpen}
                    // closeDialog={this.handleClickClose}
                    // style={inputStyle}
                    // inputChange={this.onChangeHandler}
                />
                {/* <AddRecipeModal /> */}

            </div>
        );
    }

}

export default RecipeContiner;