import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link,Redirect } from "react-router-dom";
import Exact from './exact'
import toObject from './toObject'
import from from './from'
import push from './push'
import strict from './strict'
import sensitive from './sensitive'

// 设置根路由
 class toString extends React.Component{
     constructor(props){
       super(props)
     }
  render(){
         return(
             <div>
                 
                 <h3>Redirect to的值为string的时候</h3>
                 <div>
                     <ul>
                         <li><Link to='/api/redirect/toObject'>to属性值为object</Link></li>
                        <li><Link to='/api/redirect/from'>from属性</Link></li>
                    </ul>
                  </div>
                  <Redirect  to='/api/redirect/from' />
                  {/* to属性值为字符串的时候，用于设置重定向的路由路径path */}
                  <Switch>
                      <Route path='/api/redirect/toObject' component={toObject}></Route>
                      <Route path='/api/redirect/from' component={from}></Route>
                      
                  </Switch>
             </div>
         )
     }
 }


 
export default toString;
