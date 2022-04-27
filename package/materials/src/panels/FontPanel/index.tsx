import * as React from 'react'
import { Collapse, Form, Slider, Radio } from 'antd'
import { TextAlignOptions, FontSizeMarks } from './enum'
import FontStyleSetter from './StyleSetter'
import ColorSetter from 'src/setter/ColorSetter'

const { Panel } = Collapse

export const FontStylePanel = {
  key: 'style_panel_key',
  render: (
    <Panel header='字体' key='style_panel_key'>

      <Form.Item name={['style', 'fontSize']} label='字体大小'>
        <Slider marks={FontSizeMarks} min={10} max={18} />
      </Form.Item>

      <Form.Item label='对齐方式' name={['style', 'textAlign']}>
        <Radio.Group optionType='button' options={TextAlignOptions} size='small' />
      </Form.Item>

      <Form.Item name={['style']} label='字体样式'>
        <FontStyleSetter />
      </Form.Item>

      <Form.Item name={['style', 'color']} label='字体颜色'>
        <ColorSetter />
      </Form.Item>
    </Panel>
  )
}
