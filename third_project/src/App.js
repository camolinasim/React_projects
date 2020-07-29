import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userOutputs: [{ name: "shen_op" }, { name: "gnar_op" }],
  };

  nameChangedHandler = (event) => {
    this.setState({
      userOutputs: [{ name: event.target.value }, { name: event.target.value }],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.nameChangedHandler}
          currentName={this.state.userOutputs[0].name}
        />
        <UserOutput name={this.state.userOutputs[0].name} />
        <UserOutput name={this.state.userOutputs[1].name} />
      </div>
    );
  }
}

export default App;
