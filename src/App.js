import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//COMPONENTS
import RecipeContainer from './components/RecipeContainerComponent/RecipeContainer';

export const App = () => {
    return (
      <div className="App">
        <RecipeContainer />
      </div>
    );
  }
