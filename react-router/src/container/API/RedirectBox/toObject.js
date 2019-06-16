import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link,Redirect } from "react-router-dom";
import Exact from './exact'
import toObjectBox from './boxs/toObjectBox'
import from from './from'

 class toObject extends React.Component{
      render(){
         return(
             <div>
                 
                 <h3>Redirect to的值为Object的时候</h3>
                 <div>
                     <ul>
                         <li><Link to='/api/redirect/toObject/toObjectBox'>Object</Link></li>
                        <li><Link to='/api/redirect/from'>from属性</Link></li>
                    </ul>
                  </div>
                  <Redirect  to={{pathname:'/api/redirect/toObject/toObjectBox',
                                 search: "?name=xiaoli",
                                 state: { data: 100 }}} />
                  {/* to属性值为对象的的时候，用于设置重定向的路由路径pathnamne。search和state（传值）,传的值可以在组件中的location对象获取到 */}
                  <Switch>
                      <Route path='/api/redirect/toObject/toObjectBox' component={toObjectBox}></Route>
                      <Route path='/api/redirect/from' component={from}></Route>
                 </Switch>
             </div>
         )
     }
 }


 
export default toObject;
