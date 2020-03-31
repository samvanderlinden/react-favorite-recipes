import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { v4 as uuid4 } from 'uuid';

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: uuid4(),
                    title: 'Mustard chicken',
                    ingredients: [{ item: 'Chicken' }],
                    summary: 'So good'
                },
                {
                    id: uuid4(),
                    title: 'Oatmeal',
                    ingredients: [{ item: 'Oats' }, { item: 'Peanut butter' }],
                    summary: 'Energy meal'
                }
            ]
        }
    }

    render() {
        const [{ title, ingredients, summary }] = this.state.recipes;
        console.log(title, ingredients, summary);
        return (
            <div>
                {this.state.recipes.map((recipe) => (
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
                ))}
            </div>
        );
    }
}

export default RecipeList;