import { createSlice } from '@reduxjs/toolkit'
let getData = () => {
    return new Promise((resolve, reject) => {
        resolve({
            code: 0,
            list: [{ name: 1, id: 1, job: 'job01', sex: 1 }, { name: 2, id: 2, job: 'job02', sex: 1 }, { name: 3, id: 3, job: 'job03', sex: 2 }]
        })
    });
}
const taskSlice = createSlice({
    name: 'task',
    initialState: {
        //当前切片对应reducer的初始状态；
        taskList: null
    },
    //编写不同业务逻辑下，ui公共状态的修改
    reducers: {
        getAllTaskList(state, action) {//获取数据
            console.log(action)
            //state是redux中的公共状态state数据【基于immer库管理，修改数据无需进行深拷贝】
            //action:无需考虑action.type的值，传递的数据信息，都以action.payload传递；
            state.taskList = action.payload
        },
        removeTask(state, action) { //删除数据//action.payload: 传递要删除的id
            let taskList = state.taskList
            if (!Array.isArray(taskList)) return
            state.taskList = taskList.filter(i => {
                return i.id !== action.payload
            })
        },
        updateTask(state, { payload }) {//修改数据
            let taskList = state.taskList
            // console.log(456, payload)
            if (!Array.isArray(taskList)) return
            state.taskList = taskList.map(i => {
                if (i.id === payload.id) {
                    //...
                    i = payload
                }
                return i
            })
        },
        addTask(state, { payload }) {
            state.taskList.push(payload)
        }
    }
})
export let { getAllTaskList, removeTask, updateTask, addTask } = taskSlice.actions//获取action
export const getAllTaskListAsync = () => {
    let list = []
    return async dispatch => {
        try {
            let result = await getData()
            if (result.code === 0) {
                list = result.list
            }
        } catch (_) { }
        dispatch(getAllTaskList(list))
    }
}
export const updateTaskAsync = (payload) => {
    return async dispatch => {
        dispatch(updateTask(payload))
    }
}
export const addTaskAsync = (payload) => {
    return async dispatch => {
        dispatch(addTask(payload))
    }
}
export const removeTaskAsync = (payload) => {
    return async dispatch => {
        dispatch(removeTask(payload))
    }
}
export default taskSlice.reducer//获取reducer
