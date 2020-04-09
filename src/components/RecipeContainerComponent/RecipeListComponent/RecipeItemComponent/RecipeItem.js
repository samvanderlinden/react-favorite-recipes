import React from 'react';

const RecipeItem = (props) => {
    console.log('RecipeItem console logs first');
    return (
        <li>
            <div>{props.title}</div>
            <div>{props.id}</div>
        </li>
    )
}

export default RecipeItem;