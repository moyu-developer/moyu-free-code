import React from 'react'
import { Image } from 'react-vant'

const PictureAds: React.FC = (props: any) => {
  console.log(props, 'props.lazyiamge')
  return (
    <Image {...props} fit='cover' />
  )
}

export default React.memo(PictureAds)
