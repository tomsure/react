import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import ToObjectItem from './boxs/ToObjectItem'
class ToObject extends React.Component{
   render(){
     return(
       <div>
           <div>
             <Link to={{pathname:'/api/link/toObject/toObjectItem',search:'?data=111',hash: "#testHash",
             state: { code: 1000 }}}>to的值为对象</Link>
           </div>
           {/* to的值为对象:
              pathname: 用预设值跳转路由的path
              search:用于传参（读取参数用: this.props.location.search）
              hash: 用于设值类似a标签锚点（注意：React Router 目前还不能管理滚动条的位置，并且不会自动滚动到 hash 对应的元素上。如果需要管理滚动条位置，可以使用 scroll-behavior 这个库。）
              state ：用于传参
              */}
          <Switch>
             <Route path='/api/link/toObject/toObjectItem' component={ToObjectItem}></Route>
          

          </Switch> 
       </div>
     )
   }
}
export default ToObject