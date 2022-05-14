
import React from 'react'
import { Collapse, Form, Input, Switch } from 'antd'

export const key = 'SearchPanel'

export const render = React.memo((props) => {
  return (
    <Collapse.Panel {...props} header='组件设置' key={key} />
  )
})
