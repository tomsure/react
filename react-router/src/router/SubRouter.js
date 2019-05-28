import React from 'react'
import {Route,Switch} from 'react-router-dom'
import City from '../container/City'
import Home from '../container/Home'
import Detail from '../container/Detail'
import RouterApi from '../container/API'
import CityRouter from './CityRouter'
import Api from '../container/API'
class AppRouter extends React.Component{
  render(){
      return (
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          {/* <Route exact path='/city' component={City}></Route> */}
           <City path='/city' >  
            {/* 注意这里City要使用path='/city' ，否则City后面的Route不会匹配 */}
            <Route exact  path='/city'   component={CityRouter}></Route>
           </City>
          <Route exact  path='/detail' component={Detail}></Route>  
            <Api >
            <Route exact  path='/api' component={Api}></Route>  
            </Api>
         
        </Switch>
      )
  }
}
export default AppRouter