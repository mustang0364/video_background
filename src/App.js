import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/Video/Video.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          <Video/>
        </p>
      </div>
    );
  }
}

export default App;
