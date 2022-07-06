import React from 'react'
import { Empty } from 'antd'

const CustomEmpty = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '200px'
      }}
    >
      <Empty description='还没有内容哦，快去动手添加吧！' />
    </div>
  )
}

export default React.memo(CustomEmpty)
