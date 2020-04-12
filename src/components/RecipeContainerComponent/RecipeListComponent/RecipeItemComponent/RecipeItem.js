import React from 'react';

const RecipeItem = (props) => {
    return (
            <li>
                <div>{props.title}</div>
                <div>{props.ingredients}</div>
                <div>{props.summary}</div>
            </li>
    )
}

export default RecipeItem;