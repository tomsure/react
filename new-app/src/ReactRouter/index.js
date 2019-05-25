import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RouterApi from './API/index'
class ReactRouter extends React.Component {
    render() {
        return (
            <div>
                <Router >
                    <div>
                        <li> 
                            <Link to='/ReactRouter/api'>路由API</Link></li>
                       <Route path='/ReactRouter/api' component={RouterApi}></Route>
                    </div>
                </Router>

            </div>
        )
    }
}


export default ReactRouter