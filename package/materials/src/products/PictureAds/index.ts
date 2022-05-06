import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as PictureAdsPanel from './Panel'

const PictureAds: MaterialComponentType = {
  name: '图片广告',
  panel: [PictureAdsPanel],
  defaultProps: {
    imageProps: {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
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
