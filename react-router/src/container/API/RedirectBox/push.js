import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Redirect, Route, Link } from "react-router-dom";
import Exact from './exact'
import toObjectBox from './boxs/toObjectBox'
import from from './from'
import pushBox from './boxs/pushBox'
 class Push extends React.Component{
     constructor(props){
       super(props)
     }
     render(){
         return(
             <div>push

 <div>
                     <ul>
                         <li><Link to='/api/redirect/push/pushBox'>pushBox</Link></li>
                        <li><Link to='/api/redirect/from'>from属性</Link></li>
                    </ul>
                  </div>
                  <Redirect  to={{pathname:'/api/redirect/push/pushBox',
                                } }
                             push
                            />
                   {/* push属性用途暂不清楚 */}
                  <Switch>
                      <Route path='/api/redirect/push/pushBox' component={pushBox}></Route>
                      <Route path='/api/redirect/from' component={from}></Route>
                 </Switch>

             </div>
         )
     }
 }


 
export default Push;
