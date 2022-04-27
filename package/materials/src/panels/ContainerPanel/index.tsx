import * as React from 'react'
import { Collapse, Form, Input, Radio } from 'antd'

export const PanelKey = 'container_panel_key'

export const RequestPanel = {
  key: PanelKey,
  render: (
    <Collapse.Panel header='容器' key={PanelKey}>
      1
    </Collapse.Panel>
  )
}

export default RequestPanel
