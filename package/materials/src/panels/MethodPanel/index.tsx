import * as React from 'react'
import { Collapse, Form } from '@douyinfe/semi-ui'

export const PanelKey = 'method_panel_key'

const FontPanel: React.FC = () => {
  return (
    <Collapse.Panel header='函数面板' itemKey={PanelKey}>
      <Form.Select field='Role' label=''>
        <Form.Select.Option value='guest' />

        <Form.Select.Option value='guest'>访客</Form.Select.Option>

        <Form.Select.Option value='guest'>访客</Form.Select.Option>
      </Form.Select>
    </Collapse.Panel>
  )
}

export default FontPanel
