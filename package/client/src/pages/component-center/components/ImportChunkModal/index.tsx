import * as React from 'react';
import { CustomModalSetter } from "@moyu-code/materials"
import { Button, Col, Form, Input, Row } from 'antd';

export default () => {
  return (
    <CustomModalSetter title="添加组件" trigger={<Button type='primary'>添加组件</Button>} >
      <Row>
        <Col span={12} >
          <Form layout="vertical" >
            <Form.Item label="组件名称" name="name" >
              <Input placeholder='请输入组件名称' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>1</Col>
      </Row>
    </CustomModalSetter>
  )
}