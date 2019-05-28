import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class ParamsBox extends React.Component{
     
     render(){
         console.log("params",this.props.location.params)
         return(
             <div>
                  <ul>
                      
                      <li>params:</li>
                      <li></li>
                  </ul>
             </div>
         )
     }
 }


 
export default ParamsBox