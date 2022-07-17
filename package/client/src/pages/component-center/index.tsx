import type { ProColumns } from '@ant-design/pro-components';
import { ProCard, ProTable } from '@ant-design/pro-components';
import DependList from './components/DependList'
import ImportChunkModal from './components/ImportChunkModal'
import styles from './index.module.sass'
import './model'

export default () => {

  const getRemoteComponents = async () => {
    
  }

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
    <div className={styles.component}>
       <ProCard split="vertical">
      <ProCard title="依赖管理" colSpan="20%">
        <DependList/>
      </ProCard>
      <ProCard title="组件列表" headerBordered>
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
          headerTitle='远程组件'
          toolBarRender={() => [
            <ImportChunkModal/>
          ]}
          />
      </ProCard>
    </ProCard>
    </div>
  )
}