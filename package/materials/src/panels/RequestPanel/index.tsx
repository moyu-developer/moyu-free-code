import * as React from 'react'
import { Collapse, Form, Input, Radio } from 'antd'
import BaseUrlSetter from './BaseUrlSetter'

const RequestOptions = ['POST', 'GET', 'DELETE', 'PUT'].map(v => ({ label: v, value: v }))

export const key = 'RequestPanel'

export const render = React.memo((props) => (
  <Collapse.Panel {...props} header='Request' key={key}>

    <Form.Item label='转发地址'>
      <BaseUrlSetter />
    </Form.Item>

    <Form.Item name={['__request', 'method']} label='请求方式'>
      <Radio.Group options={RequestOptions} optionType='button' size='small' defaultValue='GET' />
    </Form.Item>

    <Form.List name={['__request', 'payload']}>
      {fields =>
        fields.map(field => (
          <React.Fragment key={field.key}>
            <Form.Item name={[field.name, 'key']}>
              <Input />
            </Form.Item>
            <Form.Item name={[field.name, 'value']}>
              <Input />
            </Form.Item>
          </React.Fragment>
        ))}
    </Form.List>

  </Collapse.Panel>
))
