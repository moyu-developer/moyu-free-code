import React from 'react'
import { Switch, SwitchProps } from 'antd'

const SwitchSetter: React.FC<SwitchProps> = (props) => (<Switch checkedChildren='开启' unCheckedChildren='关闭' {...props} />)

export default SwitchSetter
