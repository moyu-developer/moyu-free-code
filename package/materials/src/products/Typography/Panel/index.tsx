
import React from 'react'
import { Form, Radio, Collapse, Input, Slider, Switch, Select } from 'antd'

const ComponentTypeOptions = [
  {
    label: '文本',
    value: 'Text'
  },
  {
    label: '链接',
    value: 'Link'
  },
  {
    label: '标题',
    value: 'Title'
  }
]

const TextOptions = [
  {
    label: '危险',
    value: 'danger'
  },
  {
    label: '辅助色',
    value: 'secondary'
  },
  {
    label: '主要的',
    value: 'primary'
  },
  {
    label: '亮色',
    value: 'light'
  },
  {
    label: '成功',
    value: 'success'
  },
  {
    label: '警告',
    value: 'warning'
  }
]

const { Panel } = Collapse

export const key = 'TypographyPanel'

export const render = React.memo((props) => (
  <Collapse.Panel {...props} header='组件设置' key={key}>
    <Form.Item name='componentType' label='组件类型' tooltip='组件的显示类型，默认为Text'>
      <Radio.Group defaultValue='Text' options={ComponentTypeOptions} />
    </Form.Item>

    <Form.Item name='type' label='文本类型' tooltip='文本类型，可选值danger secondary light primary success warning'>
      <Select options={TextOptions} />
    </Form.Item>

    <Form.Item noStyle shouldUpdate={(p, n) => p?.componentType !== n?.componentType}>
      {
        ({ getFieldValue }) => (
          getFieldValue('componentType') === 'Title'
            ? (
              <Form.Item name='level' label='标题等级' tooltip='重要程度，可选值 1 2 3 4 5'>
                <Slider min={1} max={5} />
              </Form.Item>
              )
            : null
        )
      }
    </Form.Item>

    <Form.Item name='children' label='文本内容' tooltip='文本内容'>
      <Input.TextArea />
    </Form.Item>

    <Form.Item name='ellipsis' label='文本省略' tooltip='文本省略换行数'>
      <Slider min={0} max={5} />
    </Form.Item>

    <Form.Item name='disabled' label='禁用文本' tooltip='禁用文本，用于显示禁用文本的内容'>
      <Switch />
    </Form.Item>
  </Collapse.Panel>
))
