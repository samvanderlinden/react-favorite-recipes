import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import RecipeContainer from './components/RecipeContainer';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { 
          title: 'Mustard chicken',
          ingredients: [{item: 'Chicken', amount: '1 lb'}],
          summary: 'So good'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <RecipeContainer 
        title={this.state.recipes[0].title}
        ingredients={this.state.recipes[0].ingredients[0].item}
        amount={this.state.recipes[0].ingredients[0].amount}
        summary={this.state.recipes[0].summary}/>
      </div>
    );
  }
  
}

export default App;
