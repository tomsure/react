import React from 'react'
import {Route,Switch} from 'react-router-dom'
import City from '../container/City'
import Home from '../container/Home'
import Detail from '../container/Detail'
import RouterApi from '../container/API'
import CityRouter from './CityRouter'
class AppRouter extends React.Component{
  render(){
      return (
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          {/* <Route exact path='/city' component={City}></Route> */}
           <City >
            <Route path='/'   component={CityRouter}></Route>
           </City>
          <Route exact path='/detail' component={Detail}></Route>
          <Route exact path='/routerApi' component={RouterApi}></Route>
        </Switch>
      )
  }
}
export default AppRouter