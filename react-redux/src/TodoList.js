import React from 'react';

// import store from './store/index'
import { connect } from 'react-redux'
class TodoList extends React.Component {
  render() {
    return (

      <div>
        <div>

          <input value={this.props.inputValue} onChange={this.props.handelInputChange} />
          <button onClick={this.props.handelClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>

      </div>
    )
  }

}
const mapStateToProps = (state) => { //参数state
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handelInputChange(e) {
      const action = {type: "change_input",value: e.target.value   //将输入的数据传到store
      }
     dispatch(action)
    },
    handelClick() {
      const action = {type: 'add_item'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

        









