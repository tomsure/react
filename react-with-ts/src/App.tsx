import React, { Component } from 'react'
import Comp1 from './components/Comp1'

import './App.css'
export default class App extends Component{
  render() {
    return (
      <React.Fragment>
        <div className='app'>
       <Comp1 aa='aaa' bb={100}></Comp1>

        </div>
      </React.Fragment>
    )
  }
}
