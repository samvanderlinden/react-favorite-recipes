import React from 'react';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
  const recipes = props.recipes;
  const deleteRecipe = props.deleteRecipe;
  const updateRecipe = props.updateRecipe;
  // const open = props.open;
  // const style = props.style;
  // const openDialog = props.openDialog;
  // const closeDialog = props.closeDialog;
  // const inputChange = props.inputChange;
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
        // open={open}
        // openDialog={openDialog}
        // closeDialog={closeDialog}
        // style={style}
        // inputChange={inputChange}
        />
      ))}
    </div>
  );
}

export default RecipeList;