import React from 'react'
import { CountDown, CountDownProps } from 'react-vant'

export default (props: CountDownProps) => {
  return (
    <CountDown {...props}>{props.children}</CountDown>
  )
}
