import * as React from 'react'
import { Button, Space, withField } from '@douyinfe/semi-ui'

import type { CommonFieldProps } from '@douyinfe/semi-ui/form/interface'
import { InputNumber } from '@douyinfe/semi-ui/lib/es/inputNumber'
import { IconMinimize, IconMaximize } from '@douyinfe/semi-icons'

interface BorderBoxPickerProps extends CommonFieldProps {
  fullKey?: string;
  otherKeys?: string[];
}

const GridSizeStyle = {
  width: '50%'
}
const BorderBoxPicker: React.FC<CommonFieldProps & BorderBoxPickerProps> =
  withField(
    (props) => {
      const { value = {}, onChange } = props
      const [isFull, setFullStatus] = React.useState(false)

      const handleChange = (v: number, type?: string) => {
        if (type) {
          const newValue = { ...value, [type]: v }
          onChange(newValue)
        }
      }

      return (
        <Space>
          {isFull
            ? (
              <Space wrap spacing={[0, 5]}>
                {props?.otherKeys.map((key: string) => (
                  <InputNumber
                    key={key}
                    style={GridSizeStyle}
                    value={value[key]}
                    onChange={(v) => handleChange(v as number, key)}
                  />
                ))}
              </Space>
              )
            : (
              <InputNumber
                suffix='PX'
                value={value[props?.fullKey]}
                onChange={(v) => handleChange(v as number, props?.fullKey)}
              />
              )}

          <Button
            theme='borderless'
            type='primary'
            icon={isFull ? <IconMinimize /> : <IconMaximize />}
            onClick={() => setFullStatus(!isFull)}
          />
        </Space>
      )
    },
    {
      valueKey: 'value',
      onKeyChangeFnName: 'onChange'
    }
  )

export default BorderBoxPicker
