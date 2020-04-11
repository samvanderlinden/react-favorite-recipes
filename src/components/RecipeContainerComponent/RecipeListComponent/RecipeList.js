import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import RecipeItem from './RecipeItemComponent/RecipeItem';

const RecipeList = (props) => {
    console.log(props);
    const recipes = props.recipes;
    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe._id}
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        summary={recipe.summary}
                    />
                ))}
            </ul>
            {/*
            {recipes.map((recipe) => (
                <Card key={recipe.id}>
                    <CardImg top width="100%" src="" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{recipe.title}</CardTitle>
                        <ul>
                            {recipe.ingredients.map((ingredient) => (
                                <li key={ingredient.item}>{ingredient.item}</li>
                            ))}
                        </ul>
                        <CardText>{recipe.summary}</CardText>
                        <Button color="danger">Delete</Button>
                    </CardBody>
                </Card>
            ))} */}
        </div>
    );

}

export default RecipeList;