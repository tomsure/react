import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
// import Posts from './components/Posts';
// import PostForm from './components/Postform';

import store from './store';
import RouterView from './router/index'
import routes from './router/routes';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <PostForm />
          <hr />
          <Posts /> */}
          <Router>
            <div className='root-box'>
              <div>
                <Link className='link-box' to='/A'>A路由</Link>
                <Link className='link-box' to='/B'>B路由</Link>
                <Link className='link-box' to='/C'>C路由</Link>
              </div>
              <div>
                <RouterView routes={routes}></RouterView>
              </div>
            </div>
          </Router>
        </div>
      </Provider >
    );
  }
}
export default App;
