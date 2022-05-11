import React from 'react'
import { Tabbar } from 'react-vant'

export default (props) => {
  console.log(props, 'props')
  return (
    <div className='demo-tabbar'>
      <Tabbar fixed={props.fixed} placeholder={props.placeholder}>
        <Tabbar.Item>标签</Tabbar.Item>
        <Tabbar.Item>标签</Tabbar.Item>
        <Tabbar.Item>标签</Tabbar.Item>
        <Tabbar.Item>标签</Tabbar.Item>
        <Tabbar.Item>标签</Tabbar.Item>
      </Tabbar>
    </div>
  )
}
