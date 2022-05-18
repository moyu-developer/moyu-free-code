import React from 'react'
import SetterModal from 'src/components/SetterModal'
import { CustomSetterFormItemProps } from 'src/types/setter'
import ImageList, { ImageListProps } from './ImageList'
import { Button, message, Upload, Tabs } from 'antd'
import { IconCloudUpload } from '@tabler/icons'
import styles from './index.module.sass'

export interface ResourcesModalProps {
  limit?: number
}

const uploadFileProps = {
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

const ResourcesModal = (props: ResourcesModalProps & CustomSetterFormItemProps<string[]>) => {
  const [activeKey, setActiveKey] = React.useState('history')
  const [checkedImages, setCheckedImages] = React.useState<string[]>([])

  const handleCheckedImagesChange: ImageListProps['onChange'] = (val) => {
    if (checkedImages.includes(val)) {
      setCheckedImages(state => {
        return state.filter(v => v !== val)
      })
      return
    }
    if (props.limit === checkedImages.length) {
      message.error('选择的图片已经达到上限。')
    } else {
      setCheckedImages(state => {
        return [...state, val]
      })
    }
  }

  const handleModalOk = async () => {
    props.onChange(checkedImages)
    return true
  }

  return (
    <SetterModal
      title='图片管理'
      okButtonProps={{
        disabled: !(checkedImages?.length > 0)
      }}
      onInitial={() => setCheckedImages(props.value)}
      onOk={handleModalOk}
      bodyStyle={{
        paddingTop: 0
      }} trigger={<Button>选择图片{props.value?.length}</Button>} footer={activeKey === 'upload' ? false : undefined}
    >
      <Tabs accessKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <Tabs.TabPane key='history' tab='资源列表'>
          <ImageList value={checkedImages} onChange={handleCheckedImagesChange} />
        </Tabs.TabPane>
        <Tabs.TabPane key='upload' tab='上传图片'>
          <div className={styles.upload}>
            <Upload.Dragger {...uploadFileProps} capture='environment' className={styles.uploadMain}>
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

ResourcesModal.defaultProps = {
  value: []
}

export default React.memo(ResourcesModal)
