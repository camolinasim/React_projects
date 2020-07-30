/* eslint-disable parsing-error */
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // console.log('Button was clicked!')
    //DONT DO THIS: this.state.persons[0].name = 'potato'
    this.setState({
      persons: [
        { name: newName, age: 1 },
        { name: "manu", age: 2 },
        { name: "stephanie", age: 3 },
      ],
      showPersons: false,
    });
  }; // handler means this is a method you're not actively calling

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "max", age: 10 },
        { name: event.target.value, age: 20 },
        { name: "stephanie", age: 30 },
      ],
    });
  };

  nameChangedHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  //There are two different ways of styling: You can add styles
  //locally with the style variable and pass it to the html tag
  //you want that style to go to,
  //or you can go to App.css and add global styles from there
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>I am a React app</h1>
        <button style={style} onClick={this.nameChangedHandler}>
          Toggle Persons
        </button>

        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Maximilian!!")}
            />

            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}
            >
              My hobbies: racing{" "}
            </Person>

            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, "third")}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
