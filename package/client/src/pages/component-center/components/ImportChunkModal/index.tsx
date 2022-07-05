import * as React from 'react';
import { CustomModalSetter } from "@moyu-code/materials"
import { Button, Col, Form, Input, Row } from 'antd';
import styles from './index.module.sass'


export default () => {
  return (
    <CustomModalSetter title="注册组件" trigger={<Button type='primary'>添加组件</Button>} width={720} >
      <Row gutter={24}>
        <Col span={12} >
          <Form layout="vertical" >
            <Form.Item label="组件名称" name="name" rules={[{ required: true, message: '请输入组件名称' }]} >
              <Input placeholder='请输入组件名称' />
            </Form.Item>


            <Form.Item label="渲染Key" tooltip="用于Schema工作识别组件的唯一标识，避免重复" name="displayName" rules={[{ required: true, message: '请输入渲染Key' }]} >
              <Input placeholder='请输入渲染Key' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <iframe className={styles.preview} src='https://nextui.org/'  />
        </Col>
      </Row>
    </CustomModalSetter>
  )
}