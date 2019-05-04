import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List}  from 'antd'
import axios from 'axios';
import store from '../store';
import {getInitList} from  '../store/ActionCreator'
class UseAxios extends React.Component{
     constructor(props){
         super(props)
         this.state={
            list:[
               
            ]
         }
     }
     componentDidMount(){  //在生命周期函数中执行
        const action=getInitList()
         store.dispatch(action)
     }
   render(){
       return(
           
        <div style={{marginTop:'10px',marginLeft:'30px'}}>
         
       
        
        <List
        style={{marginLeft:'10px',width:'300px'}}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={this.state.list}  //使用data
       renderItem={(item,index) => (<List.Item> )}>{item}</List.Item>)}
     
  />
        </div>
     
       )
   }

}
export default UseAxios