import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid4 } from 'uuid';

class RecipeList extends Component {
    state = {
        recipes: [
            {
                id: uuid4(),
                title: 'Mustard chicken',
                ingredients: [{ item: 'Chicken'}],
                summary: 'So good'
            },
            {
                id: uuid4(),
                title: 'Oatmeal',
                ingredients: [{ item: 'Oats'}, { item: 'Peanut butter'}],
                summary: 'Energy meal'
            }
        ]
    }

    render() {
        const [{title, ingredients, summary}] = this.state.recipes;
        console.log(title, ingredients, summary);
        return(
            <div>
                <Container>
                    <Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => {
                        const recipe = prompt('Enter Recipe');
                        if (recipe) {
                            this.setState(state => ({
                                recipes: [...state.recipes, {id: uuid4(), title:title, ingredients:ingredients[0].item, summary:summary}]
                            }))
                        }
                    }}
                    >Add Recipe</Button>
                    <ListGroup>
                        <TransitionGroup className="recipe-list">
                            {this.state.recipes.map((recipe) => (
                                <CSSTransition key={recipe.id} timeout={500} classNames="fade">
                                    <ListGroupItem>Title: {recipe.title}, {recipe.ingredients.map((item) => `${item.item} `)}</ListGroupItem>
                                    {/* <ListGroupItem>Ingredients: {recipe.ingredients.map((item) => item.item)}</ListGroupItem> */}
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default RecipeList;