import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

export default (props) => {
  const data = [
    {
      key: '0',
      name: 'John Brown',
      age: 22,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'John Brown',
      age: 22,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 3,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 342,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 62,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const createNewArr = (data: any) => {
    return data
      .reduce((result, item) => {
        //首先将name字段作为新数组result取出
        if (result.indexOf(item.name) < 0) {
          result.push(item.name);
        }
        return result;
      }, [])
      .reduce((result, name) => {
        //将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
        const children = data.filter((item: any) => item.name === name);
        result = result.concat(
          children.map((item: any, index: number) => ({
            ...item,
            rowSpan: index === 0 ? children.length : 0, //将第一行数据添加rowSpan字段
          })),
        );
        return result;
      }, []);
  };
  console.log(1111, createNewArr(data));
  const columns = [
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      render(_, row: any) {
        return {
          children: row.name,
          props: {
            rowSpan: row.rowSpan,
          },
        };
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table columns={columns} dataSource={createNewArr(data)} />;
};
