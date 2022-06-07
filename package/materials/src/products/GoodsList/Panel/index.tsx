
import React from 'react'
import { Form, Collapse } from 'antd'
import ResourcesSetter from 'src/setter/ResourcesSetter'

const { Panel } = Collapse

export const key = 'GoodsListPanel'

export const render = React.memo((props) => {
  return (
    <Panel {...props} header='商品设置' key={key}>
      <Form.Item label='商品选择' name='list'>
        <ResourcesSetter />
      </Form.Item>
    </Panel>
  )
})
