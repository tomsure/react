import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Link1 from './Link/Link1'
import InnerRefFunction from '../API/Link/innerRef-function'
 const Link1=function(){
    
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

class RouterApi extends React.Component {
    render() {
          console.log(Link1)
        return (
            <div>
              <span className="item">
                      <Link to='/ReactRouter/api/link'>Link</Link>
                    </span>
            <Router>
               <div>
              <Route path="/ReactRouter/api/link" component={Link1}></Route>
               </div>
            </Router>
            </div >
        )
    }
}


export default RouterApi