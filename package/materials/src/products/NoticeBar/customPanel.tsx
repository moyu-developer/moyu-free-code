import * as React from 'react'
import { Collapse, Form, Input, InputNumber, Switch } from 'antd'

const { Panel } = Collapse

export const NoticeBarPanel = {
  key: 'notice_props_panel_key',
  render: (
    <Panel header='组件' key='notice_props_panel_key'>
      <Form.Item name='scrollable' valuePropName='checked' label='滚动播放' tooltip='开启滚动播放'>
        <Switch />
      </Form.Item>

      <Form.Item name='wrapable' valuePropName='checked' label='内容换行' tooltip='是否开启文本换行，只在禁用滚动时生效'>
        <Switch />
      </Form.Item>

      <Form.Item name='text' label='通知文本' tooltip='通知文本内容'>
        <Input.TextArea />
      </Form.Item>

      <Form.Item name='delay' label='延迟时间' tooltip='动画延迟时间'>
        <InputNumber controls min={0} precision={0} prefix='s' />
      </Form.Item>

      <Form.Item name='speed' label='滚动速度' tooltip='滚动速率'>
        <InputNumber controls min={0} precision={0} prefix='px/s' />
      </Form.Item>
    </Panel>
  )
}
