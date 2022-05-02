import React from 'react'
import { NoticeBar } from 'react-vant'

export default (props) => {
  const { style, ...otherProps } = props
  return <NoticeBar style={{ ...style, height: '100%' }} {...otherProps} />
}
