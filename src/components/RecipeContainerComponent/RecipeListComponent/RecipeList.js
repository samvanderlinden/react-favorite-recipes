import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
  const recipes = props.recipes;
  const deleteRecipe = props.deleteRecipe;
  return (
    <div className="recipe-list-container">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          summary={recipe.summary}
          deleteRecipe={deleteRecipe}
          recipes={recipes}
          uniqueID={recipe._id}
        />
      ))}
    </div>
  );
}

export default RecipeList;