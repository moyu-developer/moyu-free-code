import { Collapse, Form } from '@douyinfe/semi-ui'
import { BasePanelProps } from './interface'

const StylePanelPanelKey = 'style_panel_key'

const StylePanel: React.FC = () => {
  
  return ( <Collapse.Panel header="字体配置" itemKey={StylePanelPanelKey}>
      <Form.Slider field="style.fontSize" label="字体大小"/>
      <Form.RadioGroup field="style.fontWeight" label="字体粗细">
        <Form.Radio value="normal" >细</Form.Radio>
        <Form.Radio value="default" >默认</Form.Radio>
        <Form.Radio value="bold" >粗</Form.Radio>
      </Form.RadioGroup>
  </Collapse.Panel>
  )
}

export default StylePanel