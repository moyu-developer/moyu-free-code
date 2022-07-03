import type { ProColumns } from '@ant-design/pro-components'
import { ProTable, PageContainer } from '@ant-design/pro-components'
import ImportChunkModal from './components/ImportChunkModal'

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
          <ImportChunkModal/>
        ]}
      />
    </div>
  )
}
