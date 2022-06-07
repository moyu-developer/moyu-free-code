import React from 'react'
import { ProductCard, Tag, Button } from 'react-vant'

export default () => {
  return (
    <div>
      <ProductCard
        num='2'
        price='2.00'
        desc='描述信息'
        title='商品名称'
        thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
      />
    </div>
  )
}
