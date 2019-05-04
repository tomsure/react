const deafultState={ //初始化state
  inputValue:'', //这里就是要存储的数据
  List:[1,2],
  
}
export default(state=deafultState,action)=>{ //函数传递两个参数：state、action；并设置state为上面定义的对象
     console.log("state",state)   //state是上一步存储的数据
     console.log("action",action)   //action是当前传递多来的数据
     if(action.type==='change_input_value'){  //判断是否要处理的这条数据
           const newState=JSON.parse(JSON.stringify(state))  //对state进行深拷贝，也就是对store存储的数据进行深拷贝
           newState.inputValue=action.value   //此时对这个newState的值进行修改，由于是深拷贝，所以store存储的数据也会改变

           return newState //固定语法：返回一下，必须返回，newState会返回到store,然后替换掉store里面存储的数据
     }
     if(action.type==='add_todo_item'){
        const newState=JSON.parse(JSON.stringify(state))   //深拷贝store 中的state
      
          newState.List.push(newState.inputValue)  // 追加一条数据
          newState.inputValue=''  //将之前存储的值清空
   
          return newState  
     }
     if(action.type==='delete_todo_item'){
      const newState=JSON.parse(JSON.stringify(state)) 
        newState.List.splice(action.index,1)
      return newState  
     }
     if(action.type==='init_list_action'){ //useAxios
       alert('useAxios')
     }
     if(action.type==='put_action'){
      alert('put_action')
     }

 return state //store所有信息
}