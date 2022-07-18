import * as React from 'react';
import { CustomModalSetter } from "@moyu-code/materials"
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import styles from './index.module.sass'


export default () => {

  const frameRef = React.useRef<HTMLIFrameElement>(null)

  const onRefreshFrameView = () => {
    const frameWindow = document.getElementById('componentPreview') as HTMLIFrameElement
    frameWindow?.contentWindow?.postMessage('hello啊，在吗', '*')
    
  }

  return (
    <CustomModalSetter okText="注册" title="注册组件" trigger={<Button type='primary'>添加组件</Button>} width={720} >
      <Row gutter={24}>
        <Col span={12} >
          <Form layout="vertical" >
            <Form.Item label="组件名称" name="name" rules={[{ required: true, message: '请输入组件名称' }]} >
              <Input placeholder='请输入组件名称' />
            </Form.Item>


            <Form.Item label="渲染Key" tooltip="用于Schema工作识别组件的唯一标识，避免重复" name="displayName" rules={[{ required: true, message: '请输入渲染Key' }]} >
              <Input placeholder='请输入渲染Key' />
            </Form.Item>

            <Form.Item label="组件地址" tooltip="打包好的UMD组件地址" name="module" rules={[{ required: true, message: '请输入组件渲染地址' }]} >
              <Input placeholder='请输入组件渲染地址' />
            </Form.Item>
          </Form>
          
          <Button onClick={onRefreshFrameView}>预览</Button>
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>预览窗口</Typography.Title>
          <iframe id='componentPreview' allowFullScreen className={styles.preview} src='//localhost:4500/full-preview/35'  />
        </Col>
      </Row>
    </CustomModalSetter>
  )
}