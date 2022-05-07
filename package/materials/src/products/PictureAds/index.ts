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
  icon: 'https://s2.loli.net/2022/05/07/PO7yUoGEnw4DspI.png',
  component: {
    displayName: 'PictureAds',
    render: RenderView
  }
}

export default PictureAds
