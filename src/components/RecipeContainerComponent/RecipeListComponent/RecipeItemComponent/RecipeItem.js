import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const RecipeItem = (props) => {
    console.log('recipe item props', props);
    return (
            <li>
                <div>{props.title}</div>
                <div>{props.ingredients}</div>
                <div>{props.summary}</div>
                <Fab color="secondary" aria-label="add" onClick={() => {props.deleteRecipe(props.uniqueID)}}>
                        <DeleteIcon />
                </Fab>
                <Fab color="default" aria-label="add" onClick={() => {props.updateRecipe(props.uniqueID)}}>
                        <EditIcon />
                </Fab>
            </li>
    )
}

export default RecipeItem;