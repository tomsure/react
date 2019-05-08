import React from 'react'
import {connect} from 'react-redux'
class TodoList1 extends React.Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.inputValue} onChange={this.props.inputChange} /> <button onClick={this.props.handelClick}>测试</button>
                <ul>
                  {
                        this.props.list1.map((item,index)=>{
                            return <li key={index}>{item}</li>
                                            })
                  }
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        inputValue: state.inputValue,
        list1:[]
    }
}
 const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        inputChange(e) {
            const action={
                type:'input_change',
                value:e.target.value  //将数据传到store
            }
            dispatch(action)
        },
        handelClick(e){
            const action={
                type:'aaa'
            }
           dispatch(action)
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(TodoList1)