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

const RecipeItem = (props) => {
        // constructor(props) {
        //         super(props);
        //         this.state = {
        //                 open: false
        //         }
        // }
        // render() {
                return (
                        <div>
                                <Card className="recipe-card">
                                        <CardContent className="recipe-content">
                                                <div>Title: {props.title}</div>
                                                <div>Ingredients: {props.ingredients}</div>
                                                <div>Cooking Directions: {props.summary}</div>
                                                <Fab className="card-btn" color="secondary" aria-label="add" onClick={() => { props.deleteRecipe(props.uniqueID) }}>
                                                        <DeleteIcon />
                                                </Fab>
                                                {/* <Fab className="card-btn" color="default" aria-label="add" onClick={ () => {props.updateRecipe(props.uniqueID)} }>
                                                        <EditIcon />
                                                </Fab> */}
                                                <Fab className="card-btn" color="default" aria-label="add" onClick={props.openDialog }>
                                                        <EditIcon />
                                                </Fab>
                                        </CardContent>
                                </Card>
                                <Dialog open={props.open} onClose={props.closeDialog} aria-labelledby="form-dialog-title">
                                        <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
                                {/* <form className="form-container" onSubmit={() => { props.updateRecipe(this.props.uniqueID) }}>
                                        <TextField style={props.inputStyle} className="form-input-title" type="text" onChange={props.inputChange} name="title" id="standard-basic" label="Title" />
                                        <TextField style={props.inputStyle} className="form-input-ingredients" type="text" onChange={props.inputChange} name="ingredients" id="standard-basic" label="Ingredients" />
                                        <TextField
                                                id="outlined-multiline-static"
                                                label="Directions"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                onChange={props.inputChange}
                                                name="summary"
                                                className="form-input-directions"
                                                style={props.inputStyle}
                                        />
                                        <Fab style={props.style} className="add-recipe-button" color="primary" aria-label="add" type="submit">
                                                <AddIcon />
                                        </Fab>
                                </form>
                                <DialogActions>
                                        <Fab color="secondary" aria-label="cancel">
                                                <CancelIcon />
                                        </Fab>
                                </DialogActions> */}
                                </Dialog>
                        </div>
                )
        // }
}

export default RecipeItem;