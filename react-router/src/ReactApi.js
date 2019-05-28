import React, { Component } from 'react';

class ReactAPI extends Component {
  handelClick(){
    //  console.log(this.props)
     this.props.history.push('/')
  }
  render() {
    return (
      <div className="App">
         reactAPI
            <button onClick={this.handelClick.bind(this)}>测试</button>
      </div>
    );
  }
}
export default ReactAPI;
