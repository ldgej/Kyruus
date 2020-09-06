import React, { Component } from 'react';
import { UserContainer } from './containers'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContainer/>
      </div>
    );
  }
}

export default App;
