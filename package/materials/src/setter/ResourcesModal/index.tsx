import React from 'react'
import SetterModal from 'src/components/SetterModal'
import ImageList from './ImageList'
import { Button, Pagination, message, Upload, Tabs } from 'antd'
import { IconCloudUpload } from '@tabler/icons'
import styles from './index.module.sass'

const props = {
  name: 'file',
  multiple: true,
  action: 'http://localhost:8500/api/v1/upload/image',
  onChange (info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop (e) {
    console.log('Dropped files', e.dataTransfer.files)
  }
}

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }]
  }
]

const ResourcesModal = () => {
  const [activeKey, setActiveKey] = React.useState('history')

  return (
    <SetterModal
      title='图片管理' bodyStyle={{
        paddingTop: 0
      }} trigger={<Button>选择图片</Button>} footer={activeKey === 'upload' ? false : undefined}
    >
      <Tabs accessKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <Tabs.TabPane key='history' tab='资源列表'>
          <ImageList />
        </Tabs.TabPane>
        <Tabs.TabPane key='upload' tab='上传图片'>
          <div className={styles.upload}>
            <Upload.Dragger {...props} capture='environment' className={styles.uploadMain}>
              <p>
                <IconCloudUpload className={styles.uploadIcon} color='#165DFF' />
              </p>
              <p className='ant-upload-text'>单击或拖动文件到此区域即可上传图片</p>
              <p className='ant-upload-hint'>
                支持单次或批量上传图片，由于是个人项目，请避免上传一些非法图片和隐私图片。
              </p>
            </Upload.Dragger>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </SetterModal>
  )
}

export default React.memo(ResourcesModal)
