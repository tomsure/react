import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'

class ToStringItem extends React.Component{
   render(){
     return(
       <div>

         
         
          <div>
            to的值为字符串的时候，里面的字符串就是跳转的路由的path,例如这里就是跳转到“/api/link”
          </div>

          
       </div>
     )
   }
}
export default ToStringItem