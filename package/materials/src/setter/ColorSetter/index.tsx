import { CustomSetterFormItemProps } from '@/types/global'
import { Input, message, Popover } from 'antd'
import { SketchPicker } from 'react-color'
import React from 'react'

const styles: React.CSSProperties = {
  height: 22,
  width: 22 * 2
}

interface ColorSetterProps {
  initialColor?: string;
}

const ColorSetter: React.FC<CustomSetterFormItemProps<string> & ColorSetterProps> = (
  props
) => {
  const color = React.useMemo(() => {
    return props.value || props.initialColor
  }, [props.value, props.initialColor])

  /**
   * 修改颜色
   * @param hex 变化的颜色
   */
  const onColorPickerChange = (hex: string) => {
    const hexRule = /^#[0-9a-fA-F]{6}$/
    if (hex.match(hexRule)) {
      props.onChange(hex)
    } else {
      message.warn(`${hex}看起来不是一个合法的色值。`)
    }
  }

  return (
    <Popover
      placement='bottom'
      content={
        <SketchPicker
          color={color}
          onChangeComplete={(e) => onColorPickerChange(e.hex)}
        />
      }
    >
      <Input
        value={color}
        suffix={<div style={{ ...styles, background: color }} />}
        onChange={(e) => onColorPickerChange(e.target.value)}
      />
    </Popover>
  )
}

ColorSetter.defaultProps = {
  initialColor: '#333'
}

export default React.memo(ColorSetter)
