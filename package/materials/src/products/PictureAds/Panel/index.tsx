import React from 'react'
import { Collapse, Form, Input } from 'antd'
import MultiCropsSetter from './MultiCropsSetter'

export const PictureAdsPanel = React.memo((props) => (
  <Collapse.Panel {...props} header='组件设置' key='PictureAdsPanel'>

    <Form.Item name={['imageProps', 'src']} label='图片链接' tooltip='图片的远程地址'>
      <Input.Search placeholder='图片链接' />
    </Form.Item>

    <Form.Item noStyle shouldUpdate={(p, n) => p?.imageProps?.src !== n?.imageProps?.src}>
      {
        ({ getFieldValue }) => (
          <Form.Item name='coordinates' label='热区设置'>
            <MultiCropsSetter img={getFieldValue(['imageProps', 'src'])} />
          </Form.Item>
        )
      }
    </Form.Item>
  </Collapse.Panel>
))
