import React, { ReactNode } from 'react'
import { Image, ImageProps } from 'react-vant'

interface PictureAdsProps {
  imageProps?: ImageProps,
  children?: ReactNode
}

const PictureAds: React.FunctionComponent<PictureAdsProps> = (props) => {
  return (
    <Image {...props.imageProps} fit='cover' />
  )
}

export default React.memo(PictureAds)
