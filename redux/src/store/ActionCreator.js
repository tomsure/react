import { GET_INIT_LIST } from "./ActionTypes";
export const getInitList=()=>({
    type:GET_INIT_LIST
})
export const initListAction=(data)=>({
    type:'init_list_action',
    data
})
export const putAction=(data)=>({
    type:'put_action',
    data
})