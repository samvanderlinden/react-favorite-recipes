import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTS
import RecipeContainer from './components/RecipeContainerComponent/RecipeContainer';
import Navbar from './components/NavbarComponent/Navbar';

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
