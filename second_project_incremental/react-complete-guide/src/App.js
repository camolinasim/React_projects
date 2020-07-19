import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a React app and I am awesome :')</h1>
        <h1>This is really working!</h1>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
    
  }
}

export default App;
