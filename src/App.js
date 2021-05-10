import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import Algorithm from './Algorithm.js';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/algorithm" component={Algorithm}/>
      </div>
    );
  }
}

export default App;