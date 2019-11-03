import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Persons />
      </div>
    )
  }
}

export default App;