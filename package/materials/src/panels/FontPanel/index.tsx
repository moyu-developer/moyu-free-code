import * as React from 'react'
import { Collapse } from 'antd'
import FontSizeSetter from './FontSize'

const { Panel } = Collapse

export const FontStylePanel = {
  key: 'style_panel_key',
  render: (
    <Panel header='字体样式' key='style_panel_key'>
      {/* fontSize设置器 */}
      <FontSizeSetter />
    </Panel>
  )
}
