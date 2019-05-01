import React, { Component } from 'react';
import Abs from './Abs'
import ReactRouter from './ReactRouter/index'
class App extends Component {
  render() {
    return (
      <div className="App">
         <Abs />
         <ReactRouter />
      </div>
    );
  }
}

export default App;
