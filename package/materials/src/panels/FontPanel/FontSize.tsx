import { Form, Slider } from 'antd'
import React from 'react'

export default () => {
  return (
    <Form.Item name={['style', 'fontSize']} label='字体大小'>
      <Slider min={10} max={64} />
    </Form.Item>
  )
}
