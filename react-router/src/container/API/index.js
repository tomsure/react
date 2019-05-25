import React from 'react'
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import Link1 from './Link/Link1'
import InnerRefFunction from '../API/Link/innerRef-function'
class RouterApi extends React.Component {
    render() {
          
        return (
            <div>
                  react-router-api
              <span className="item">
                <Link to='/routerApi/link'>Link</Link>
                    </span>
            <Switch>
                <Route exact path="/routerApi/link" component={Link1}></Route>
             </Switch>
            </div >
        )
    }
}


export default RouterApi