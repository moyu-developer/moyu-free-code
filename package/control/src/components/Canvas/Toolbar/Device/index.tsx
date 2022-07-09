import * as React from 'react'
import { Button, Badge } from 'antd'
import Icon from 'src/common/components/AntSvg'
import { DeviceMobile, DevicesPc } from 'tabler-icons-react'

const options = [
  {
    label: '默认',
    value: '375'
  }
]

const Device = () => {
  return (
    <>
    
      <Button
            type='link'
            icon={<Badge dot><Icon icon={DeviceMobile} /></Badge>}
          />
          <Button
            type='link'
            icon={<Icon icon={DevicesPc} />}
          />
          
    </>
  )
}

export default Device
