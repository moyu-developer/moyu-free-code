import type { ProColumns } from '@ant-design/pro-components'
import { ProTable, PageContainer } from '@ant-design/pro-components'
import ImportChunkModal from './components/ImportChunkModal'

export default () => {
  const columns: ProColumns[] = [
    {
      dataIndex: 'name',
      title: '名称'
    },
    {
      dataIndex: 'packageName',
      title: '包名'
    },

    {
      dataIndex: 'version',
      title: '版本'
    },


    {
      dataIndex: 'version',
      title: '操作',
      hideInSearch: true
    },

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
        headerTitle='组件列表'
        toolBarRender={() => [
          <ImportChunkModal/>
        ]}
      />
    </div>
  )
}
