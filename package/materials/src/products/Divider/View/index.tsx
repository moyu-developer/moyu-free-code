import React from 'react'
import { Divider, DividerProps } from 'react-vant'

export default (props: DividerProps) => {
  return (
    <Divider {...props}>{props.children}</Divider>
  )
}
