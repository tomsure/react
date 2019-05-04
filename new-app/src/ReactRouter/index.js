import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LinkA from './API/Link/LinkA.js'

class ReactRouter extends React.Component{
    
    render(){
        return(
            <div>
                
                <Router> 
                  <li><Link to='/link'>Link</Link></li>
                    <div>
                    <Route path="/link" component={LinkA} />
                        </div>    
                    </Router>
                 
            </div>
        )
    }
}

    
export default ReactRouter