import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由
 class PushBox extends React.Component{
     handelClick=()=>{
         let {history}=this.props
         history.push({pathname:'/api/link'})   //跳转到‘/api/link’
     }
     clickWitchQuery=()=>{
         
        let {history}=this.props
        history.push({pathname:'/api/history/query',query:{name:"querytext"}})     //通过query传参
    }
    clickWitchParams=()=>{
        let {history}=this.props
        
        history.push({pathname:'/api/history/params',params:{name:"paramstext"}})     
    }
    clickWitchParams1=()=>{
        let {history}=this.props
        
        this.props.history.push('/api/history/params1/'+ '2')   
    }
    clickWitchState=()=>{
        let {history}=this.props
        
        history.push({pathname:'/api/history/state',state:{name:"statetext"}})     
    }
     render(){
         return(
             <div>
                 <button onClick={this.handelClick}>基本使用：点击跳转路由</button>
                 <h5>push时候传递参数</h5>
                  <div>
                      
                      <button onClick={this.clickWitchQuery}>通过query传递参数（刷新会丢失）</button>
                  </div>
                  <div>
                      
                      <button onClick={this.clickWitchParams}>通过params传递参数（刷新会丢失）</button>
                     
                  </div>
                   <div>
                   <button onClick={this.clickWitchParams1}>通过params传递参数（刷新不会丢失）</button>
                   </div>
                   <div>
                   <button onClick={this.clickWitchState}>通过state传递参数（刷新不会丢失）</button>
                   </div>
             </div>
         )
     }
 }


 
export default PushBox
