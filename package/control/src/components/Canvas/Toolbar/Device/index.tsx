import * as React from 'react'
import { Select } from 'antd'

const options = [
  {
    label: '默认',
    value: '375'
  }
]

const Device = () => {
  return (
    <>
      <Select style={{ width: 80 }} placeholder='移动端' options={options} bordered={false} />
    </>
  )
}

export default Device
