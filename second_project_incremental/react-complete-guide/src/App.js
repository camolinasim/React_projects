import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a React app and I am awesome :')</h1>

      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null ,'Hi, I am a React App!!') );
  }
}

export default App;