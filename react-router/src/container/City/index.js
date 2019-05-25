import React from 'react'
import {Link} from 'react-router-dom'
class City extends React.Component{
  render(){
     return(
      <div>
      City
        <ul>
          <li><Link to='/city/hsarea'>洪山区</Link></li>
          <li><Link to='/city/ssarea'>松山区</Link></li>
        </ul>
        {this.props.children} 
         {/* //这里表示子路由的Route标签 */}
    </div>
     )
  }
}
export default City