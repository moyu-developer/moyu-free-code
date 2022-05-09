import { Checkbox, Form, Space } from 'antd'
import { CustomSetterFormItemProps } from 'src/types/setter'
import React, { useCallback } from 'react'

interface FontStyleSetterProps {
}

const CheckboxTargetValue = {
  fontWeight: 'bold',
  fontStyle: 'italic',
  textDecoration: 'line-through'
}

const FontStyleSetter: React.FC<
  CustomSetterFormItemProps & FontStyleSetterProps
> = (props) => {
  const handleFontStyleSetterChange = useCallback(
    (key: 'fontWeight' | 'fontStyle' | 'textDecoration', checked: boolean) => {
      props?.onChange &&
        props.onChange({
          ...props.value,
          [key]: checked ? CheckboxTargetValue[key] : undefined
        })
    },
    [props.onChange, props.value]
  )

  return (
    <Space size={0}>
      <Checkbox
        checked={props.value?.fontWeight === 'bold'}
        onChange={(val) =>
          handleFontStyleSetterChange('fontWeight', val.target.checked)}
      >
        加粗
      </Checkbox>
      <Checkbox
        checked={props.value?.fontStyle === 'italic'}
        onChange={(val) =>
          handleFontStyleSetterChange('fontStyle', val.target.checked)}
      >
        倾斜
      </Checkbox>
      <Checkbox
        checked={props.value?.textDecoration === 'line-through'}
        onChange={(val) =>
          handleFontStyleSetterChange('textDecoration', val.target.checked)}
      >
        删除
      </Checkbox>
    </Space>
  )
}

export default FontStyleSetter
