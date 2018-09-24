import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = {};
  
  render() {
    return (
      <div className="App">
        <h1>React Scratchard</h1>
        <Card />
      </div>
    );
  }
}

export default App;
