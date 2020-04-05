import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/RecipeContainerComponent/AppNavbarComponent/AppNavbar';
import RecipeContainer from './components/RecipeContainerComponent/RecipeContainer';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <RecipeContainer />
      </div>
    );
  }
  
}

export default App;
