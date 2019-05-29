import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import ParamsBox from './box/ParamsBox'
import ParamsBox1 from './box/ParamsBox1'

import QueryBox from './box/QueryBox'

import PushBox from './methods/Push'
import StateBox from './box/stateBox'

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
                     <Route path='/api/history/params1/:id' component={ParamsBox1}></Route>  {/*通过params传参,刷新不丢失 */}
                     <Route path='/api/history/query' component={QueryBox}></Route>
                     <Route path='/api/history/state' component={StateBox}></Route>


                 </Switch>
             </div>
         )
     }
 }


 
export default HistoryBox
