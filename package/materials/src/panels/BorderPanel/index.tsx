import * as React from 'react'
import { Col, Collapse, Form, InputNumber, Row, Select, Tag } from 'antd'
import ColorSetter from 'src/setter/ColorSetter'

const BorderStyleOptions = ['solid', 'dashed', 'dotted', 'hidden', 'none'].map(t => ({
  label: t,
  value: t
}))

export const key = 'BorderPanel'

export const render = React.memo((props) => (
  <Collapse.Panel {...props} header='边框设置' key={key}>
    <Row gutter={[20, 0]}>
      <Col span={12}>

        <Form.Item name={['style', 'borderWidth']} label='宽度'>
          <InputNumber prefix="px" style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item name={['style', 'borderStyle']} label='样式'>
          <Select options={BorderStyleOptions} placeholder='none' />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item name={['style', 'borderColor']} label='颜色'>
          <ColorSetter />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item name={['style', 'borderRadius']} label='圆角'>
          <InputNumber prefix="px" style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Row>
  </Collapse.Panel>
))
