import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import './css/style.css'
import SubRouter from './router/SubRouter'
import ReactApi from './ReactApi'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
            <li  className='navlist'>
                <Link to='/home'>主页</Link>
              </li>
              <li className='navlist'>
                <Link to='/city'>城市</Link>
              </li>
              <li  className='navlist'>
                <Link to='/detail'>详情</Link>
              </li>
              <li className='navlist'>
                <Link to='/routerApi'>react-API</Link>
              </li>
            </ul>
              <div>
             {this.props.children}   
             {/* 这一步相当于编写App组件的子路由的多个Route，也就是SubRruter组件中的多个Route标签，所以这里可以像这样写,从而可以省去SubRruter组件：
             <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/city' component={City}></Route>
              <Route exact path='/detail' component={Detail}></Route>
            </Switch> */}
              </div>
          </div>
       </Router>
      </div>
    );
  }
}
export default App;
