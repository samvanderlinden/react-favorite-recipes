import React from 'react';

const RecipeItem = (props) => {
    console.log(props);
    return (
        <div>
            <li>
                <div>{props.title}</div>
                <div>{props.ingredients}</div>
                <div>{props.summary}</div>
            </li>
        </div>
    )
}

export default RecipeItem;