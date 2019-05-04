import React from 'react'
import TodoList from './TodoList';
import UseAXios from './UseAxios/UseAxios'
import TodoListActionCreator from './todoList_ActionCreator'
import UseSaga from './UseSaga/UseSaga'
class App extends React.Component{
    render(){
        return(
            <div>
                <h3>redux基本使用</h3>
      <TodoList />
         <hr/>
           <h5>使用ActionCreators</h5>
         <TodoListActionCreator />
           <div>
                <hr/>
               <h3>redux中使用AXios</h3>
                <UseAXios />
           </div>
            <div>
                <hr/>
                <h5>使用Saga</h5>
                <UseSaga />
            </div>
            </div>  
        )
    }
}
export default App
