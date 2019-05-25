import React from 'react'
import {Route,BrowserRouter } from 'react-router-dom'
import App from '../App'
import SubRouter from './SubRouter'
class AppRouter extends React.Component{
  render(){
      return (
        <BrowserRouter>
            
          <App>
          <Route path='/' component={SubRouter}></Route> 
            {/* //注意这里此时不能使用exact，因为子路由没有path='/' */}
          </App>
        </BrowserRouter>
      )
  }
}
export default AppRouter