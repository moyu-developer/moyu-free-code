import * as React from 'react'
import { Collapse, Form } from '@douyinfe/semi-ui'
import ColorPicker from '../../settings/ColorPicker'

export const FontPanelPanelKey = 'style_panel_key'

const list = [
  { value: 'abc', label: '抖音', otherKey: 0 },
  { value: 'hotsoon', label: '火山小视频', disabled: true, otherKey: 1 },
  { value: 'jianying', label: '剪映', otherKey: 2 },
  { value: 'toutiao', label: '今日头条', otherKey: 3 }
]

const FontPanel: React.FC = () => {
  return (
    <Collapse.Panel header='字体配置' itemKey={FontPanelPanelKey}>
      <Form.Slider field='props.style.fontSize' label='字体大小' />
      <Form.RadioGroup
        field='props.style.fontWeight'
        label='字体粗细'
        options={[
          {
            label: '细体',
            value: 'normal'
          },
          {
            label: '粗体',
            value: 'bold'
          }
        ]}
      />
      <Form.Select
        style={{
          width: '100%'
        }}
        field='props.textDecoration'
        label='文字样式'
        optionList={list}
      />
      <ColorPicker field='props.style.color' label='字体颜色' />
      <Form.TextArea
        field='props.children'
        label='文本内容'
        placeholder='请输入需要显示的内容'
      />
    </Collapse.Panel>
  )
}

export default FontPanel
