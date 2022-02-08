import { Collapse, Form } from '@douyinfe/semi-ui'
import { BasePanelProps } from './interface'

const StylePanelPanelKey = 'style_panel_key'

const StylePanel: React.FC<BasePanelProps> = (props) => {
  return ( <Collapse.Panel header="样式编辑面板" itemKey={StylePanelPanelKey}>
      <Form.Slider field={props.componentId + '.style.fontSize'} label="字体大小" />
      <Form.RadioGroup field={props.componentId + '.style.fontWeight'} label="字体粗细">
        <Form.Radio value="normal" >细</Form.Radio>
        <Form.Radio value="default" >默认</Form.Radio>
        <Form.Radio value="bold" >粗</Form.Radio>
      </Form.RadioGroup>
  </Collapse.Panel>
  )
}

export default StylePanel