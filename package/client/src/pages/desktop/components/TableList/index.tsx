import React from 'react'
import { Table } from 'antd'

export default () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '页面描述',
      dataIndex: 'description',
      key: 'description'
    },

    {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },

    {
      title: '类型',
      dataIndex: 'type',
      key: 'type'
    }
  ]

  return (
    <div>
      <Table bordered dataSource={[]} columns={columns} />
    </div>
  )
}
