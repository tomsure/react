import {takeEvery,put} from 'redux-saga/effects'
import { GET_INIT_LIST } from "./ActionTypes";
import {putAction} from './ActionCreator'
import axios from 'axios'
function * getList(){  //提前定义好
    console.log(123)
    //当下面的mySaga方法里面的takeEvery()的第一个参数与组件中调用getInitList()方法里面的参数相同的时候就会执行，所以这里可以用来做异步请求数据的操作
   
    // axios.get('http://rap2api.taobao.org/app/mock/162369/example/1552708185734').then(res=>{
    //     console.log("sagdATA",res.data)
    //     })
    // 上面的语句可以按照yield语法来写：
    const res=yield axios.get('http://rap2api.taobao.org/app/mock/162369/example/1552708185734')
    //  此时，当执行yield后面的语句成功之后会将数据直接存在res这个常量里面

    // 下面可以再进行其他异步操作：
      const action=putAction(res.data) //定义action (type:'init_list_action')
      yield put(action)  //相当于不用saga中间件时候的dispatch(action)
    //这一部分代码(四行)表示上面的请求数据的异步操作完成后执行这段异步操作
      
}
 
function * mySaga(){
   yield takeEvery(GET_INIT_LIST,getList)  //在这里调用，这一句相当于监听 
   //当takeEvery(方法)第一个参数的值与组件中定义的componentDidMount中的getInitList()方法中的type相同的时候，就会调用第二个参数，这里也就会调用这里的getList（）方法
   //
}
export default mySaga