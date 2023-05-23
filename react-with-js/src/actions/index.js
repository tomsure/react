import axios from "axios"


const changeList = (data) => {
    return {
        type: "GET_LIST",
        data
    }
}

export const getToList = () => {
    return (dispatch, getState) => {
        axios.get('https://autumnfish.cn/fruitApi/fruits').then(res => {
            let action = changeList(res.data.data)
            console.log('state', getState())
            dispatch(action)
        })
    }
}
