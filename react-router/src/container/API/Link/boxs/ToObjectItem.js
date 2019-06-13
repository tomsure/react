import React from 'react'
class ToObjectItem extends React.Component{
   render(){
       const hashStyle={
           "display":'inline-block',
        "margin-top":'1000px'
       }
     return(
       <div>

         
         
          <div>
             to的值为对象
          </div>
          <a name='testHash1' style={hashStyle}> 
             测试hash属性
          </a>
          
       </div>
     )
   }
}
export default ToObjectItem