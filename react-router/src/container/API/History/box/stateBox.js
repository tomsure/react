import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class StateBox extends React.Component{
     
     render(){
         console.log("state",this.props.location.state)  //刷新会丢失
         
         return(
             <div>
                  <ul>
                      
                      <li>state传过来的值,刷新不会丢失</li>
                      <li></li>
                  </ul>
             </div>
         )
     }
 }


 
export default StateBox