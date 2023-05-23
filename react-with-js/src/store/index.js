import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import taskSliceReducer from './features/task.js'
const store = configureStore({
    reducer: {//指定reducer
        //按模块管理各个切片
        task: taskSliceReducer
    },

    middleware: [reduxLogger, reduxThunk] //默认使用reduxThunk,不写也会生效这个
})
export default store
