import * as React from "react";
import { Popover, Button, withField } from "@douyinfe/semi-ui";
import { SketchPicker } from "react-color";

import type { CommonFieldProps } from '@douyinfe/semi-ui/form/interface'

const ColorPicker: React.FC<CommonFieldProps> = withField((props) => {

  console.log(props)
  
  return (
    <Popover
      showArrow
      trigger="click"
      spacing={0}
      content={
        <SketchPicker
          color={props.value}
          onChangeComplete={(c) => props.onChange(c.hex)}
        />
      }
    >
      <Button>{props.value || '颜色设置'}</Button>
    </Popover>
  );
}, {
  valueKey: 'value',
})

export default ColorPicker
