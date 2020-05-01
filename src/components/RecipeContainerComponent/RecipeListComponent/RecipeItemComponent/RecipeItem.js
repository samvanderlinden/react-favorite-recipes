import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../../../App.css';

const inputStyle = {
        marginTop: '15px'
}

const style = {
        alignSelf: 'flex-start',
        position: 'absolute',
        bottom: '10px',
        left: '10px'
}

class RecipeItem extends Component {
        constructor(props) {
                super(props);
                this.state = {
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
        render() {
                const {title, ingredients, summary} = this.props;
                return (
                        <div>
                                <Card className="recipe-card">
                                        <CardContent className="recipe-content">
                                                <div>Title: {title}</div>
                                                <div>Ingredients: {ingredients}</div>
                                                <div>Cooking Directions: {summary}</div>
                                                <Fab className="card-btn" color="secondary" aria-label="add" onClick={() => { this.props.deleteRecipe(this.props.uniqueID) }}>
                                                        <DeleteIcon />
                                                </Fab>
                                                <Fab className="card-btn" color="default" aria-label="add" onClick={this.handleClickOpen}>
                                                        <EditIcon />
                                                </Fab>
                                        </CardContent>
                                </Card>
                                <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
                                        <form className="form-container">
                                                <TextField 
                                                        style={inputStyle} 
                                                        className="form-input-title" 
                                                        type="text" 
                                                        name="title" 
                                                        id="standard-basic" 
                                                        label="Title" 
                                                        value={this.props.title} 
                                                />
                                                <TextField 
                                                        style={inputStyle} 
                                                        className="form-input-ingredients" 
                                                        type="text" 
                                                        name="ingredients" 
                                                        id="standard-basic" 
                                                        label="Ingredients" 
                                                        value={this.props.ingredients} 
                                                />
                                                <TextField
                                                        id="outlined-multiline-static"
                                                        label="Directions"
                                                        multiline
                                                        rows={6}
                                                        variant="outlined"
                                                        // onChange={props.inputChange}
                                                        name="summary"
                                                        className="form-input-directions"
                                                        style={inputStyle}
                                                        value={this.props.summary}
                                                />
                                                <Fab style={style} className="add-recipe-button" color="primary" aria-label="add" type="submit">
                                                        <AddIcon />
                                                </Fab>
                                        </form>
                                        <DialogActions>
                                                <Fab onClick={this.handleClickClose} color="secondary" aria-label="cancel">
                                                        <CancelIcon />
                                                </Fab>
                                        </DialogActions>
                                </Dialog>
                        </div>
                )
        }
}

export default RecipeItem;