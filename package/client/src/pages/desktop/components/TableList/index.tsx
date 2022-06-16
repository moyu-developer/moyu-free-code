import React from 'react'
import { Link } from 'umi'
import { ProColumns, ProTable } from '@ant-design/pro-components'
import { RootState, Dispatch } from '@/common/model'
import { useSelector, useDispatch } from 'react-redux'
import getViewListApi, { QueryViewListResponseDto } from '@/api/view/list'
import { Typography } from 'antd'

export default () => {
  const dispatch: Dispatch = useDispatch()

  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 70,
      key: 'id',
      render: (id: number) => <Link to={`/example?id=${id}`} component={Typography.Link}>{id}</Link>
    },
    {
      title: '名称',
      width: 200,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '页面描述',
      copyable: true,
      ellipsis: true,
      dataIndex: 'description',
      key: 'description'
    },

    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      width: 100,
      valueEnum: {
        0: {
          text: '已保存',
          status: 'Processing'
        },
        1: {
          text: '已发布',
          status: 'Success'
        }
      }
    },
    {
      title: '操作',
      fixed: 'right',
      align: 'center',
      width: 150,
      render: (record: QueryViewListResponseDto['data']['list'][0]) => [
        <Typography.Text type='danger' key='delete' onClick={() => dispatch.myApp.deleteDashViewById(record.id)}>删除</Typography.Text>
      ]
    }
  ]

  return (
    <div>
      <ProTable
        request={dispatch.myApp.getDashViewList}
        rowKey='id'
        pagination={{
          showQuickJumper: true,
          size: 'default'
        }}
        columns={columns}
        search={false}
        dateFormatter='string'
        headerTitle='页面列表'
      />
    </div>
  )
}
