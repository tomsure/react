import React from 'react'
import TodoList from './TodoList';
import TodoListActionCreator from './todoList_ActionCreator'
class App extends React.Component{
    render(){
        return(
            <div>
      <TodoList />
         <hr/>
         <TodoListActionCreator />
            </div>  
        )
    }
}
export default App
