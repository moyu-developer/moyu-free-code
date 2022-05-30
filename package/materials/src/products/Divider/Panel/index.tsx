
import React from 'react'
import { Form, Collapse, Input, Switch, Radio } from 'antd'

const { Panel } = Collapse

export const key = 'DividerPanel'

export const render = React.memo((props) => {
  return (
    <Panel {...props} header='分割线设置' key={key}>
      <Form.Item name='children' label='文本内容'>
        <Input placeholder='请输入分割线内容' />
      </Form.Item>
      <Form.Item name='dashed' label='使用虚线' valuePropName='checked'>
        <Switch />
      </Form.Item>
      <Form.Item name='contentPosition' label='内容位置'>
        <Radio.Group
          optionType='button'
          defaultValue='left'
          options={[
            { label: '靠左', value: 'left' },
            { label: '靠右', value: 'right' }
          ]}
        />
      </Form.Item>
    </Panel>
  )
})
