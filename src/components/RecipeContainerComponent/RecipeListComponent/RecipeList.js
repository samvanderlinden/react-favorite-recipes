import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
    const recipes = props.recipes;
    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe._id}
                        uniqueID={recipe._id}
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        summary={recipe.summary}
                    />
                ))}
            </ul>
        </div>
    );

}

export default RecipeList;