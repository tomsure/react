import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
const Link = () => (
  // 根路由标签
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />
      {/*// 设置跳转的组件*/}
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
// 设置Home组件
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
// 设置 Topics组件
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
   
    
  </div>
);
// 设置二级组件
const Topic = ({ match }) => {
  console.log(match);
  return (
    <h3>{match.url}</h3>
  )
};
export default Abs;
