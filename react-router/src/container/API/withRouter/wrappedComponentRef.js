import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class WrappedComponentRef extends React.Component{
     constructor(props){
       super(props)
     }
     render(){
         return(
             <div>wrappedComponentRef</div>
         )
     }
 }


 
export default WrappedComponentRef;
