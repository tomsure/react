import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import InnerRefFunction from './innerRef-function'
import InnerRefObject from './innerRef-RefObject'
import ReplaceBoolean from './replace-bool'
import ToObject from './to-object'
import ToString from './to-string'
 class LinkBox extends React.Component{
      render(){
        return(
            <div> 
                   <ul>
                   <li><Link to='/api/link/toString'>to 值为函数</Link></li>
                   <li><Link to='/api/link/toObject'>to 值为对象</Link></li>
                   <li><Link to='/api/link/InnerRefFunction'>innerRef 值为函数</Link></li>
                   <li><Link to='/api/link/InnerRefObject'>innerRef 值为对象</Link></li>
                   <li><Link to='/api/link/replace'>replace</Link></li>
                   </ul>
   
                  <Switch>
                  <Route path='/api/link/InnerRefFunction' component={InnerRefFunction}></Route>
                  <Route path='/api/link/InnerRefObject' component={InnerRefObject}></Route>
                  <Route path='/api/link/replace' component={ReplaceBoolean}></Route>
                  <Route path='/api/link/toObject' component={ToObject}></Route>
                  <Route path='/api/link/toString' component={ToString}></Route> 
                  </Switch>
            </div>
        )
      }
}
export default LinkBox