
import React from 'react'
import { Collapse, Form, Input, Switch } from 'antd'
import ColorSetter from 'src/setter/ColorSetter'
import SwitchSetter from 'src/setter/SwitchSetter'

export const key = 'SearchPanel'

export const render = React.memo((props) => {
  return (
    <Collapse.Panel {...props} header='组件设置' key={key}>

      <Form.Item name='clearable' label='关闭按钮' tooltip='启用清除图标，点击清除图标后会清空输入框'>
        <SwitchSetter />
      </Form.Item>

      <Form.Item name='disabled' label='禁用输入框' tooltip='启用清除图标，点击清除图标后会清空输入框'>
        <SwitchSetter />
      </Form.Item>

      <Form.Item name='clearable' label='自动聚焦' tooltip='自动聚焦，iOS 系统不支持该属性'>
        <SwitchSetter />
      </Form.Item>
      <Form.Item name='placeholder' label='描述文本' tooltip='占位提示文字, 搜索框没有内容时会展现此内容'>
        <Input />
      </Form.Item>

      <Form.Item name='label' label='左侧文本'>
        <Input />
      </Form.Item>

      <Form.Item name='background' label='背景颜色' tooltip='搜索框外部背景色'>
        <ColorSetter />
      </Form.Item>
    </Collapse.Panel>
  )
})
