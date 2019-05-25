import React from 'react'
import {Route,Switch} from 'react-router-dom'


import HsArea from '../container/City/HsArea'
import SsArea from '../container/City/SsArea'
class CityRouter extends React.Component{
  render(){
      return (
        <Switch>
          <Route exact path='/city/hsarea' component={HsArea}></Route>
          <Route exact path='/city/ssarea' component={SsArea}></Route>
        </Switch>
      )
  }
}
export default CityRouter