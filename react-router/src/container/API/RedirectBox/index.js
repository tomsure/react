import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link,Redirect } from "react-router-dom";
import Exact from './exact'
import toObject from './toObject'
import toString from './toString'

import from from './from'
import push from './push'
import strict from './strict'
import sensitive from './sensitive'

// 设置根路由
 class RedirectBox extends React.Component{
     constructor(props){
       super(props)
     }
     
     render(){
         return(
             <div>
                 Redirect
                 <h3>Redirect</h3>
                 <div>
                     <ul>
                         <li><Link to='/api/redirect/toObject'>to属性值为object</Link></li>
                         <li><Link to='/api/redirect/toString'>to属性值为string</Link></li>
                         <li><Link to='/api/redirect/from'>from属性</Link></li>
                         <li><Link to='/api/redirect/exact'>exact属性</Link></li>
                         <li><Link to='/api/redirect/push'>push属性</Link></li>
                         <li><Link to='/api/redirect/strict'>strict属性</Link></li>
                         <li><Link to='/api/redirect/sensitive'>sensitive属性</Link></li>
                     </ul>
                  </div>
                  <Redirect  to='/api/redirect/sensitive' />
                  <Switch>
                      <Route path='/api/redirect/toObject' component={toObject}></Route>
                      <Route path='/api/redirect/toString' component={toString}></Route>
                      <Route path='/api/redirect/exact' component={Exact}></Route>
                      <Route path='/api/redirect/from' component={from}></Route>
                      <Route path='/api/redirect/push' component={push}></Route>
                      <Route path='/api/redirect/strict' component={strict}></Route>
                      <Route path='/api/redirect/sensitive' component={sensitive}></Route>
                  </Switch>
             </div>
         )
     }
 }


 
export default RedirectBox;
