import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AppNavbar from './components/AppNavbar';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        { 
          title: '',
          ingredients: [{item: '', amount: ''}],
          summary: ''
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
  
}

export default App;
