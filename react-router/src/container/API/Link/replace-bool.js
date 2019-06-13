import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import TestReplace from './boxs/TestReplace'
class Replace extends React.Component{
   render(){
     return(
       <div>

          Replace
          <Link to='/api/link/replace/testReplace' replace>跳转测试</Link>
          <Link to='/api/link/replace/testReplace' >跳转测试1</Link>  
          <Switch>
            <Route path='/api/link/replace/testReplace' component={TestReplace}></Route>
          </Switch>
       </div>
     )
   }
}
export default Replace