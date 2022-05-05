import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import React from 'react'
import { PictureAdsPanel } from './Panel'

const PictureAds: MaterialComponentType = {
  name: '图片广告',
  panel: [React.createElement(PictureAdsPanel) as any],
  defaultProps: {
    src: 'https://img.yzcdn.cn/vant/cat.jpeg'
  },
  gridLayout: {
    h: 80
  },
  component: {
    displayName: 'PictureAds',
    render: RenderView
  }
}

export default PictureAds
