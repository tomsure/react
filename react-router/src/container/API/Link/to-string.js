import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import ToStringItem from './boxs/ToStringItem'
import ToStringWithParams from './boxs/ToStringWithParams'
class ToString extends React.Component{
   render(){
     return(
       <div>

          <h3>to:oString</h3>
           <div>
           <Link to='/api/link/toString/toStringItem'>to的值为字符串</Link>
           </div>
         

          <div>
          <Link to='/api/link/toString/toStringWithParams?aa=100'>to的值为字符串的时候传参</Link>
          </div>
          <Switch>
            <Route path='/api/link/toString/toStringItem' component={ToStringItem}></Route>
            <Route path='/api/link/toString/toStringWithParams' component={ToStringWithParams}></Route>

          </Switch>
       </div>
     )
   }
}
export default ToString