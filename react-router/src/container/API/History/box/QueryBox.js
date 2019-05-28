import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class QueryBox extends React.Component{
     
     render(){
       
         console.log("query",this.props.location.query)
         return(
             <div>
                  <ul>
                      <li>通过query传过来的值</li>
                      
                      <li></li>
                  </ul>
             </div>
         )
     }
 }


 
export default QueryBox