
import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'

class toStringWithParams extends React.Component{
    componentDidMount(){
        console.log(this.props.location.search)
    // 通过Link标签to的字符串值穿过来的参数可以通过this.props.location.search获取
    }
   render(){
     return(
       <div>
        
          
         
          <div>
            to的值为字符串的时候，传递参数
          </div>

          
       </div>
     )
   }
}
export default toStringWithParams