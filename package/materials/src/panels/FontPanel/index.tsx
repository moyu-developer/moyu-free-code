import * as React from 'react'
import { Collapse, Form, Slider, Radio } from 'antd'
import { TextAlignOptions } from './enum'
import FontStyleSetter from './StyleSetter'
import ColorSetter from 'src/setter/ColorSetter'

const { Panel } = Collapse

export const key = 'FontPanel'

export const render = React.memo((props) => (
  <Panel {...props} header='字体' key={key}>
    <Form.Item name={['style', 'fontSize']} label='字体大小'>
      <Slider  min={10} max={99} />
    </Form.Item>

    <Form.Item label='对齐方式' name={['style', 'textAlign']}>
      <Radio.Group
        optionType='button'
        options={TextAlignOptions}
        size='small'
      />
    </Form.Item>

    <Form.Item
      name={['style']} label='字体样式' shouldUpdate={(p, n) => {
        if (p?.style?.fontWeight !== n?.style?.fontWeight) {
          return true
        }

        if (p?.style?.fontStyle !== n?.style?.fontStyle) {
          return true
        }

        if (p?.style?.textDecoration !== n?.style?.textDecoration) {
          return true
        }

        return false
      }}
    >
      <FontStyleSetter />
    </Form.Item>

    <Form.Item name={['style', 'color']} label='字体颜色'>
      <ColorSetter />
    </Form.Item>
  </Panel>
))
