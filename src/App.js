import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//COMPONENTS
import RecipeContainer from './components/RecipeContainerComponent/RecipeContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }

}

export default App;
