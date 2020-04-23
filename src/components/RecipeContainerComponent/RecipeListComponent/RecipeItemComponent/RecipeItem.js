import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const RecipeItem = (props) => {
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
                                        <Fab className="card-btn" color="default" aria-label="add" onClick={() => { props.updateRecipe(props.uniqueID) }}>
                                                <EditIcon />
                                        </Fab>
                                </CardContent>
                        </Card>
                </div>
        )
}

export default RecipeItem;