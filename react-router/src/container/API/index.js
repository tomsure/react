import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import LinkBox from '../API/Link'
import HistoryBox from '../API/History'
import BrowserRouter from './BrowserRouter/BrowserRouter'
import HashRouter from './HashRouter/HashRouter'
import LocationBox from './location'
import Match from './match/Match'
import MatchPath from './matchPath/PatchPath'
import MemoryRouter from './MemoryRouter/MemoryRouter'
import NativeRouter from './NativeRouter/NativeRouter'
import NavLink from './NavLink/NavLink'
import Prompt from './Prompt/Prompt'
import Redirect from './Redirect/Redirect'
import RouteBox from './Route/Route'
import RouterBox from './Router/RouterBox'
import StaticRouter from './StaticRouter/StaticRouter'
import SwitchBox from './Switch/Switch'
import WithRouterBox from './withRouter/WithRouterBox'

class Api extends React.Component{
   render(){
     return(
       <div>
           <h3>API</h3>
           <ul>
               <li><Link to='/api/link'>Link标签</Link></li>
               <li><Link to='/api/history'>history对象</Link></li>
               <li><Link to='/api/browserRouter'> BrowserRouter</Link></li>
               <li><Link to='/api/hashRouter'>HashRouter</Link></li>
               <li><Link to='/api/Location'>Location</Link></li>
                <li><Link to='/api/navLink'>NavLink</Link></li>
               <li><Link to='/api/memoryRouter'>MemoryRouter</Link></li> 
               <li><Link to='/api/redirect'>Redirect</Link></li>
               <li><Link to='/api/route'>Route</Link></li>
                <li><Link to='/api/router'>Router</Link></li>
               <li><Link to='/api/staticRouter'>StaticRouter</Link></li>
               <li><Link to='/api/prompt'>Prompt</Link></li>
                <li><Link to='/api/switch'>Switch</Link></li>
               <li><Link to='/api/match'>match</Link></li>
                <li><Link to='/api/matchPath'>matchPath</Link></li>
               <li><Link to='/api/withRouter'>withRouter</Link></li>
           </ul>
              <Switch>
                     
                      <Route path='/api/link' component={LinkBox}></Route>
                      <Route path='/api/history' component={HistoryBox}></Route>
                      <Route path='/api/browserRouter' component={BrowserRouter}></Route>
                      <Route path='/api/hashRouter' component={HashRouter}></Route>
                      <Route path='/api/location' component={LocationBox}></Route>
                      <Route path='/api/navLink' component={NavLink}></Route>
                      <Route path='/api/prompt' component={Prompt}></Route>
                      <Route path='/api/memoryRouter' component={MemoryRouter}></Route>
                      <Route path='/api/redirect' component={Redirect}></Route>
                      <Route path='/api/route' component={RouteBox}></Route>
                      <Route path='/api/router' component={RouterBox}></Route>
                      <Route path='/api/staticRouter' component={StaticRouter}></Route> 
                      <Route path='/api/nativeRouter' component={NativeRouter}></Route>
                      <Route path='/api/switch' component={SwitchBox}></Route>
                      <Route path='/api/match' component={Match}></Route>
                      <Route path='/api/matchPath' component={MatchPath}></Route>
                      <Route path='/api/withRouter' component={WithRouterBox}></Route>
                      
               </Switch>
       </div>
     )
   }
}
export default Api