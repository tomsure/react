import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class ParamsBox1 extends React.Component{
     
     render(){
        
         console.log("params",this.props.match.params)  //刷新不会丢失
         return(
             <div>
                  <ul>
                      
                      <li>params传过来的值,刷新不会丢失</li>
                      <li></li>
                  </ul>
             </div>
         )
     }
 }


 
export default ParamsBox1