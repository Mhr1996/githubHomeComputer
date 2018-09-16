import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Com from './components/Card';

class App extends Component {
  render() {
    const ko=[2,3,4];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Com  name="{网}" item={ko}/>
      </div>
    );
  }
}

export default App;
