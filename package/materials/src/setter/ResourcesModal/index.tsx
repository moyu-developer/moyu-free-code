import React from 'react'
import SetterModal from 'src/components/SetterModal'
import { CustomSetterFormItemProps } from 'src/types/setter'
import ImageList, { ImageListProps } from './ImageList'
import { Button, message, Upload, Tabs } from 'antd'
import { IconCloudUpload } from '@tabler/icons'
import styles from './index.module.sass'

export interface ResourcesModalProps {
  limit?: number;
  children?: React.ReactNode,
  type?: 'radio' | 'checkbox',
  format?: (value?: string[]) => any
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

const ResourcesModal: React.FC<ResourcesModalProps & CustomSetterFormItemProps<string[]>> = (props) => {
  const [activeKey, setActiveKey] = React.useState('history')
  const [checkedImages, setCheckedImages] = React.useState<string[]>([])

  /**
   * 处理选中图片地址的状态切换
   * @param val 当前图片地址
   */
  const handleCheckedImagesChange: ImageListProps['onChange'] = (val) => {
    if (props.type === 'radio') {
      setCheckedImages([val])
    } else {
      setCheckedImages((state) => {
        if (state.includes(val)) return state.filter(v => v !== val)
        return [...state, val]
      })
    }
  }

  const handleModalOk = async () => {
    let values = checkedImages
    if (props.format) {
      values = props.format(checkedImages)
    }
    props.onChange && props.onChange(values)
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
      }} trigger={props.children}
      footer={activeKey === 'upload' ? false : undefined}
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
