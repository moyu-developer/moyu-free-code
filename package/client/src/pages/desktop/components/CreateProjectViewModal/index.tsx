import { history } from 'umi'
import { Space, Modal, Form, Row, Col, Input, Upload, message } from 'antd'
import { saveViewSchemaService, SaveViewSchemaRequest } from '@moyu-code/shared'
import * as React from 'react'
import { isSuccess } from '@moyu-code/request'

const CreateProjectViewModal: React.FC<{}> = (props) => {
  const [visible, setVisible] = React.useState(false)
  const [form] = Form.useForm()

  const onStartModal = () => {
    setVisible(true)
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const onFinish = async () => {
    const hide = message.loading({
      content: '页面创建中'
    }, 0)
    const formData: any = await form.validateFields()
    const linkUrl = formData?.thumbnail?.[0]?.response?.data?.linkUrl

    const { code, data, message: errorMessage } = await saveViewSchemaService({
      ...formData,
      thumbnail: linkUrl,
      schema: '',
      env: 0,
      status: 1
    })
    hide()
    if (isSuccess(code)) {
      message.success('页面创建成功，将进入编辑页面')
      history.push({
        pathname: '/example',
        query: {
          id: String(data)
        }
      })
    } else {
      message.error(`页面创建失败，原因是：${errorMessage}`)
    }
  }

  return (
    <Space>
      <div onClick={onStartModal}>{props.children}</div>
      <Modal
        title='创建页面'
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onFinish}
      >
        <Form form={form} layout='vertical' onValuesChange={(v) => console.log(v, 'v')}>
          <Form.Item
            name='name'
            label='请页面名称'
            rules={[{ required: true, message: '请输入页面名称？' }]}
          >
            <Input max={10} placeholder='请输入页面名称？' />
          </Form.Item>

          <Form.Item
            name='description'
            label='页面描述'
          >
            <Input.TextArea
              rows={3}
              maxLength={100}
              placeholder='请输入页面描述？'
            />
          </Form.Item>
          <Form.Item label='页面图片' name='thumbnail' valuePropName='fileList' getValueFromEvent={normFile}>
            <Upload.Dragger name='file' action='http://localhost:8500/api/v1/upload/image' maxCount={1}>
              <p className='ant-upload-text'>单击或拖动文件到此区域以上载</p>
              <p className='ant-upload-hint'>仅限上传单张图片用于页面显示图</p>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  )
}

export default React.memo(CreateProjectViewModal)
