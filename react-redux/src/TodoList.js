import React from 'react';
import store from './store/index'
class  TodoList extends React.Component{
 
       render(){
           return(
                <div>
                 <div>
                  < input value={this.state.inputValue} /> 
                  <button onClick={}>提交</button>
                 </div>
                 <ul>
                   <li>3131</li>
                 </ul>
                  
                </div>
           )
       }
}
 const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}
export default TodoList