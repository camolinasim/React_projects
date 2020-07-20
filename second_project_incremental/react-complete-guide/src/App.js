import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'cris', age: 24},
      {name: 'crost', age: 22},
      {name: 'crust', age: 23}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I am a React app</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
    
  }
}

export default App;
