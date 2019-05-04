import {createStore} from 'redux'
import reducer from './reducer'
const store=createStore(
    reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //使用调试工具
    )  //创建store

export default store