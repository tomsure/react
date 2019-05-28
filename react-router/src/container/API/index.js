import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import LinkBox from '../API/Link'
import HistoryBox from '../API/History'
class Api extends React.Component{
   render(){
     return(
       <div>

           <h3>API</h3>
           <ul>
               <li><Link to='/api/link'>Link标签</Link></li>
               <li><Link to='/api/history'>history对象</Link></li>
           </ul>
              <Switch>
                     
                      <Route path='/api/link' component={LinkBox}></Route>
                      <Route path='/api/history' component={HistoryBox}></Route>
               </Switch>
       </div>
     )
   }
}
export default Api