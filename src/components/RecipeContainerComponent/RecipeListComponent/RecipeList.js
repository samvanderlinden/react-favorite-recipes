import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
    const recipes = props.recipes;
    const deleteRecipe = props.deleteRecipe;
    const updateRecipe = props.updateRecipe;
    return (
        <div>
                {recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe._id}
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        summary={recipe.summary}
                        deleteRecipe={deleteRecipe}
                        updateRecipe={updateRecipe}
                        uniqueID={recipe._id}
                    />
                ))}
        </div>
    );
}

export default RecipeList;