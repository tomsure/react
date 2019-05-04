import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List}  from 'antd'
import store from './store/index'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class TodoList extends React.Component{
  constructor(props){
    super(props)
    //  console.log(store.getState())  //获取store的数据
      this.state=store.getState()
     
      store.subscribe(this.handleStoreChange.bind(this))

  }
  handleChange(e){
    // console.log(e.target.value)
  const action={
    type:'change_input_value',
    value:e.target.value
  }
    
    store.dispatch(action)
  }
  handleStoreChange(){
       this.setState(store.getState())
  }
  submit(e){
     const action={
       type:'add_todo_item',
       value:''
     }
     store.dispatch(action)
  }
  handelItemClick(index){
      const action={
        type:'delete_todo_item',
        index
      }
      store.dispatch(action)
  }
  render(){
    return(
        <div style={{marginTop:'10px',marginLeft:'30px'}}>
          <div>
          <Input   value={this.state.inputValue} size="large"
          onChange={this.handleChange.bind(this)}
           style={{width:'300px'}} placeholder="large size" />
          <Button type='primary' onClick={this.submit.bind(this)}>提交</Button>
          </div>
          <div>
          {/* <List
          style={{marginLeft:'10px',width:'300px'}}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}  //使用data
      renderItem={item => (<List.Item>{item}</List.Item>)}
    /> */}
          <List
          style={{marginLeft:'10px',width:'300px'}}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.state.List}  //使用data
      renderItem={(item,index) => (<List.Item onClick={this.handelItemClick.bind(this,index)}>{item}</List.Item>)}
       
    />
          </div>
        </div>
    )
  }
}

export default TodoList;
