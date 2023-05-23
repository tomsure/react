import React from 'react'
export default class Child2 extends React.Component {
  render() {
    console.log('子组件2渲染')
    return <div className='box'>
      <div>
        子组件2
      </div>
      <div>
        {this.props.str}
      </div>
    </div>
  }
}
