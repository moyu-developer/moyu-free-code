
import React from 'react'
import { Collapse, Form, Input, Switch } from 'antd'
import ColorSetter from 'src/setter/ColorSetter'
import SwitchSetter from 'src/setter/SwitchSetter'

export const key = 'TabBarPanel'

export const render = React.memo((props) => {
  return (
    <Collapse.Panel {...props} header='组件设置' key={key}>
      <Form.Item label='占位' name='placeholder'>
        <SwitchSetter />
      </Form.Item>
      <Form.Item label='固定底部' name='fixed'>
        <SwitchSetter />
      </Form.Item>
    </Collapse.Panel>
  )
})
