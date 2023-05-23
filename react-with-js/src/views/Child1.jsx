import React, { forwardRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'antd'
import { addTask, addTaskAsync, getAllTaskListAsync, removeTaskAsync, updateTaskAsync } from '../store/features/task.js'
import obj from '../store/features/task.js'
console.log(2222, obj)
let Child1 = forwardRef((props, ref) => {
  let childMethod = () => {
    console.log('子组件方法')
  }
  let { taskList } = useSelector(state => state.task),
    dispatch = useDispatch()
  useEffect(() => {
    if (!taskList) {
      dispatch(getAllTaskListAsync()) //获取表格数据
    }
  }, [])
  let getData = () => {
    dispatch(getAllTaskListAsync()) //获取表格数据

  }
  let add = () => {
    let obj = { name: 1, id: 1, job: 'job01', sex: 1 }
    dispatch(addTaskAsync(obj))
  }
  let del = (data) => {//id
    dispatch(removeTaskAsync(data))
  }
  let update = (a, b) => {
    console.log(112, a, b)

    let data = { name: 1, id: 2, job: 'job01', sex: 1 }
    dispatch(updateTaskAsync(data))
  }
  let column = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '工作',
      dataIndex: 'job',
      key: 'job',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => <div>
        <Button type="link" onClick={() => add()}>
          增加
        </Button>
        <Button type="link" onClick={() => del(record.id)}>
          删除
        </Button>
        <Button type="link" onClick={() => update(_, record)}>
          编辑
        </Button>
      </div>,
    },
  ]

  return (
    <div>Child1
      <div> <Button type='primary' onClick={() => getData()}>拉取数据</Button> </div>
      {taskList && <Table key={'id'} columns={column} dataSource={taskList}></Table>}
    </div>
  )
})
export default Child1
