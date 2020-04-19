import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
//COMPONENTS
import RecipeContainer from './components/RecipeContainerComponent/RecipeContainer';
import Signup from './components/SignUpComponent/SignUp';
import LoginForm from './components/LoginComponent/Login';
import Navbar from './components/NavbarComponent/Navbar';
import Home from './components/HomeComponent/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: null
    }
  }

  componentDidMount = () => {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/recipes"
          component={RecipeContainer} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
      </div>
    );
  }

}

export default App;
