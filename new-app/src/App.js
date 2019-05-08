import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactRouter from './ReactRouter/index'

import ReactApi from './ReactApi'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/ReactRouter'>react-路由</Link>
              </li>
              <li>
                <Link to='/reactapi'>react-API</Link>
              </li>
            </ul>
              <div>
              <Route path='/ReactRouter' component={ReactRouter}></Route>
              <Route path='/reactapi' component={ReactApi}> </Route>
            
              </div>
          </div>
       </Router>
      </div>
    );
  }
}
export default App;
