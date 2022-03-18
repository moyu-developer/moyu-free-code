import * as React from 'react'
import { Collapse, Form } from '@douyinfe/semi-ui'
import ColorPicker from '../../settings/ColorPicker'
import BorderBoxPicker from '../../settings/BorderBoxPicker'

const BoxPanelKey = 'box_panel_key'

const BoxPanel = () => {
  return (
    <Collapse.Panel header='容器配置' itemKey={BoxPanelKey}>
      <ColorPicker field='props.style.background' label='背景颜色' />
      <Form.Select
        style={{ width: '100%' }}
        field='props.style.borderStyle'
        label='容器边框'
        optionList={[
          {
            label: '实线',
            value: 'solid',
            otherKey: 0
          },
          {
            label: '虚线',
            value: 'dashed',
            otherKey: 1
          },
          {
            label: '双线',
            value: 'double',
            otherKey: 2
          },
          {
            label: '点状',
            value: 'dotted',
            otherKey: 3
          }
        ]}
      />
      <ColorPicker field='props.style.borderColor' label='边框颜色' />
      <Form.InputNumber
        min={0}
        field='props.style.borderSize'
        label='边框大小'
      />
      <Form.InputNumber
        min={0}
        field='props.style.borderRadius'
        label='圆角大小'
      />
      <Form.InputGroup
        label={{
          text: '容器大小'
        }}
      >
        <Form.InputNumber
          style={{ width: '50%' }}
          min={0}
          field='props.style.width'
          prefix='宽'
        />
        <Form.InputNumber
          style={{ width: '50%' }}
          min={0}
          field='props.style.height'
          prefix='高'
        />
      </Form.InputGroup>

      <BorderBoxPicker
        field='props.style'
        label='容器内距'
        fullKey='padding'
        otherKeys={[
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft'
        ]}
      />

      <BorderBoxPicker
        field='props.style'
        label='容器外距'
        fullKey='margin'
        otherKeys={[
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft'
        ]}
      />
      <BorderBoxPicker
        field='props.style'
        label='容器圆角'
        fullKey='borderRadius'
        otherKeys={[
          'borderTopLeftRadius',
          'borderTopRightRadius',
          'borderBottomLeftRadius',
          'borderBottomRightRadius'
        ]}
      />
    </Collapse.Panel>
  )
}

export default BoxPanel
