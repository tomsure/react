import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 设置根路由

      class Box1 extends React.Component{
       
          render(){
              return(
                  <div>Box1</div>
              )
          }
      }
      class Box2 extends React.Component{
       
        render(){
            return(
                <div>Box2</div>
            )
        }
    }

 class LinkA extends React.Component{
     
     render(){
         return(
             <div>
                 Link标签
                
                 <Router>
                 <li><Link to='/box1'>box1</Link></li>
                 <li><Link to='/box2'>box2</Link></li>
                 <Route path='/box1' component={Box1}></Route>

                   <Route path='/box2' component={Box2}></Route>
                 </Router>
             </div>
         )
     }
 }


 
export default LinkA;
