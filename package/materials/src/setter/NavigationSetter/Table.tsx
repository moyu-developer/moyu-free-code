import { Table } from 'antd'
import React from 'react'

const baseColumns = [
  {
    title: 'UID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '地址',
    dataIndex: 'url',
    key: 'url'
  }
]

const NavigationTable = () => {
  const columns = Object.assign(baseColumns)

  return <Table columns={columns} rowKey='id' />
}

export default NavigationTable
