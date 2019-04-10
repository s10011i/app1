import React, { Component } from 'react';
import {Router, Route} from "react-router";
// import Header from './components/Header';
import Home from './components/Home';
import Root from './components/Root';
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <Root>
        <Home />
      </Root>
    );
  }
}

export default App;
