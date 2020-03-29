import React from 'react';

const RecipeContiner = (props) => {
    const {title, ingredients, amount, summary} = props;
    return (
        <div>
            <ul>
                <li>Title: {title}</li>
                <li>Ingredients: {ingredients} Amount: {amount}</li>
                <li>Summary: {summary}</li>
            </ul>
        </div>
    )
}

export default RecipeContiner;