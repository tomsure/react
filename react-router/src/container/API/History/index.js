import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import ParamsBox from './box/ParamsBox'
import QueryBox from './box/QueryBox'

import PushBox from './methods/Push'
// 设置根路由
 class HistoryBox extends React.Component{
      
     render(){
         return(
             <div>
                 <h3>History</h3>
                 <ul>
                     <li>
                         <Link to='/api/history/push'>Push方法</Link>
                     </li>
                 </ul>
                 <Switch>
                     <Route path='/api/history/push' component={PushBox}></Route>
                     <Route path='/api/history/params' component={ParamsBox}></Route>
                     <Route path='/api/history/query' component={QueryBox}></Route>

                 </Switch>
             </div>
         )
     }
 }


 
export default HistoryBox
