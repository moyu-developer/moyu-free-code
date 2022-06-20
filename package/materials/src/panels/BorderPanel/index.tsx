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
    <Row>
      <Col span={12}>

        <Form.Item name={['styles', 'border-width']} label='宽度'>
          <InputNumber prefix={<Tag color='blue'>px</Tag>} />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item name={['styles', 'border-size']} label='样式'>
          <Select options={BorderStyleOptions} placeholder='none' />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item name={['styles', 'border-color']} label='颜色'>
          <ColorSetter />
        </Form.Item>
      </Col>
    </Row>
  </Collapse.Panel>
))