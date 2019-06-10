import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class WrappedComponent extends React.Component{
     constructor(props){
       super(props)
     }
     render(){
         return(
             <div>WrappedComponent</div>
         )
     }
 }


 
export default WrappedComponent;
