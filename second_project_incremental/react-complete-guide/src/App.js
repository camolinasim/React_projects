import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'cris', age: 24},
      {name: 'crost', age: 22},
      {name: 'crust', age: 23}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
   // console.log('Button was clicked!')
   //DONT DO THIS: this.state.persons[0].name = 'potato'
   this.setState({
    persons: [
      {name: 'A', age: 1},
      {name: 'B', age: 2},
      {name: 'C', age: 3}
    ]
   })
  } //handler means this is a method you're not actively calling


  render() {
    return (
      <div className="App">
        <h1>I am a React app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler}/>
        
        <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler}>My hobbies: racing </Person>

        <Person name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        click={this.switchNameHandler}/> 

      </div>
    );
    
  }
}

export default App;
