const deafultState={ //初始化state
  inputValue:'', //这里就是要存储的数据
  list:[],
  list1:[]
  
}
export default(state=deafultState,action)=>{ //函数传递两个参数：state、action；并设置state为上面定义的对象
     
    if(action.type==='change_input'){
       const newState=JSON.parse(JSON.stringify(state))
       newState.inputValue=action.value
       return newState
    }
    if(action.type==='add_item'){
      const newState=JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue=''
      return newState
    }
    if(action.type==='input_change'){
      console.log(action.value)
    }
    if(action.type==='aaa'){
      const newState=JSON.parse(JSON.stringify(state))

        newState.list.push(newState.inputValue)
      newState.inputValue=''
      return newState
    }
 return state //store所有信息
}