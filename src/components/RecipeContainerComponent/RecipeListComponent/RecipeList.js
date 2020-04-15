import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
    console.log('props.recipes', props)
    const recipes = props.recipes;
    const deleteRecipe = props.deleteRecipe;
    const updateRecipe = props.updateRecipe;
    return (
        <div>
            <ul>
                {recipes.map((recipe, index) => (
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
            </ul>
        </div>
    );

}

export default RecipeList;