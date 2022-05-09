
import React from 'react'
import { Form, Collapse, Input, Switch } from 'antd'

const { Panel } = Collapse

export const key = 'CountDownPanel'

export const render = React.memo((props) => {
  return (
    <Panel {...props} header='组件设置' key={key}>
      <Form.Item name='format' label='倒计时格式' tooltip='时间格式，细节请查阅说明文档'>
        <Input placeholder='YYYY-MM-DD HH:mm:ss' />
      </Form.Item>

      <Form.Item name='millisecond' label='毫秒级渲染' tooltip='毫秒级渲染，适用于限时抢购等活动场景。'>
        <Switch />
      </Form.Item>
    </Panel>
  )
})
