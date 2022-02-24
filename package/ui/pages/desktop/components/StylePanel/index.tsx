import { Collapse, Form } from "@douyinfe/semi-ui";

const FontSizeMarks = {
  10: '迷你',
  12: '12',
  14: '14',
  16: '16',
  18: '18',
  20: '20',
  22: '22'
}

const TextPanel = () => {
  return (
    <Collapse.Panel header="This is panel header 1" itemKey="1">
      <Form.Slider field="fontSize" name="字体大小" marks={FontSizeMarks} />
      <Form.RadioGroup field="fontWeight">
        <Form.Radio value="normal" >细</Form.Radio>
        <Form.Radio value="normal" >默认</Form.Radio>
        <Form.Radio value="normal" >粗</Form.Radio>
      </Form.RadioGroup>
      <Form.Input field="font" />
    </Collapse.Panel>
  );
};

export default TextPanel;
