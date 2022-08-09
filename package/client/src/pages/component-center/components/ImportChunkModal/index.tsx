import * as React from 'react';
import { CustomModalSetter } from "@moyu-code/materials"
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import styles from './index.module.sass'


export default () => {

  const [form] = Form.useForm()

  const onRefreshFrameView = async () => {
    const formData = await form.validateFields()
    const frameWindow = document.getElementById('componentPreview') as HTMLIFrameElement
    frameWindow?.contentWindow?.postMessage({
      sourceData: [
        
      ],
      url: 'http://175.178.14.116:9000/avatars/video.js'
    }, '*')

    return false
    
  }

  return (
    <CustomModalSetter okText="注册" title="注册组件" onOk={onRefreshFrameView} trigger={<Button type='primary'>添加组件</Button>} width={720} >
      <Row gutter={24}>
        <Col span={12} >
          <Form layout="vertical" form={form} >
            <Form.Item label="组件名称" name="name" rules={[{ required: true, message: '请输入组件名称' }]} >
              <Input placeholder='请输入组件名称' />
            </Form.Item>

            <Form.Item label="组件地址" tooltip="打包好的UMD组件地址" name="url" rules={[{ required: true, message: '请输入组件渲染地址' }]} >
              <Input placeholder='请输入组件渲染地址' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>预览窗口</Typography.Title>
          <iframe id='componentPreview' allowFullScreen className={styles.preview} src='//localhost:4500/message-preview'  />
        </Col>
      </Row>
    </CustomModalSetter>
  )
}