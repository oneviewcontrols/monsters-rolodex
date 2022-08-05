import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: { firstName: 'ansancle', lastName: 'fooo'},
      company: 'ACME'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Hi {this.state.name.firstName}</p>
        <button onClick={() => {
          this.setState(
            () => {
            return {
              name : {firstName: 'Bob', lastName: 'Deedle'}
            };
          },
          () => {
            console.log(this.state);
          }
          )
        }}
        >Click Me</button>
      </div>
    );
  }
}

export default App;
