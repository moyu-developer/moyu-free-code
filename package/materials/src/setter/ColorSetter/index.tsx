
import React from 'react'
import { CustomSetterFormItemProps } from 'src/types/setter'
import { message, Popover, Space } from 'antd'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import styles from './index.module.sass'

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
    console.log(hex, 'hex')
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
        <HexColorPicker color={color} onChange={onColorPickerChange} />
      }
    >
      <div className={styles.colorPicker}>
        <HexColorInput prefix='#' color={color} onChange={onColorPickerChange} className={styles.input} />
          <div
            className={styles.block} style={{
              background: color
            }}
          />
      </div>
    </Popover>
  )
}

ColorSetter.defaultProps = {
  initialColor: ''
}

export default React.memo(ColorSetter)
