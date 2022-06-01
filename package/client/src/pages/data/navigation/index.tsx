
import type { ProColumns } from '@ant-design/pro-components'
import { ProTable, PageContainer } from '@ant-design/pro-components'
import { Button, Tooltip } from 'antd'

export default () => {
  const columns: ProColumns[] = [
    {
      dataIndex: '1',
      title: '测试标题'
    }
  ]

  return (
    <div>
      <ProTable<any>
        columns={columns}
        request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter)
          return Promise.resolve({
            data: [],
            success: true
          })
        }}
        rowKey='key'
        pagination={{
          showQuickJumper: true
        }}
        search={{
          optionRender: false,
          collapsed: false
        }}
        dateFormatter='string'
        headerTitle='表格标题'
        toolBarRender={() => [
          <Button key='show'>查看日志</Button>,
          <Button key='out'>
            导出数据
          </Button>,
          <Button type='primary' key='primary'>
            创建应用
          </Button>
        ]}
      />
    </div>
  )
}
