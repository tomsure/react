import React from 'react'
import {BrowserRouter as Router,Route,Link,withRouter} from 'react-router-dom'
import InnerRefFunction from './innerRef-function'
import InnerRefObject from './innerRef-RefObject'
import ReplaceBoolean from './replace-bool'
import ToObject from './to-object'
import ToString from './to-string'


class Link1 extends React.Component{
     render(){
        return(
            <div>
                
               <Link to="/ReactRouter/api/link/innerRefFunction">InnerRef：值为函数</Link>
             <Router> 
                 <div> 
                  <Route path='/ReactRouter/api/link/innerRefFunction' component={InnerRefFunction}></Route>  
                
                  </div>
             </Router> 
            </div>
        )
     }
    
}
 export default Link1