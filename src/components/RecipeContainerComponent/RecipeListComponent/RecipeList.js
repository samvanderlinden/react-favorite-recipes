import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
    console.log('props.recipes', props.recipes)
    const recipes = props.recipes;
    return (
        <div>
            <ul>
                {recipes.map((recipe, index) => (
                    <RecipeItem
                        key={recipe._id}
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