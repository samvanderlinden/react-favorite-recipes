import React from 'react';

const RecipeItem = (props) => {
    console.log('recipe item props', props);
    return (
            <li>
                <div>{props.title}</div>
                <div>{props.ingredients}</div>
                <div>{props.summary}</div>
                <button onClick={() => {props.deleteRecipe(props.uniqueID)}}>Delete</button>
            </li>
    )
}

export default RecipeItem;