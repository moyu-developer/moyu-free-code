import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as PictureAdsPanel from './Panel'
import * as ContainerPanel from 'src/panels/ContainerPanel'
import * as BorderPanel from 'src/panels/BorderPanel'

const PictureAds: MaterialComponentType = {
  name: '图片广告',
  panel: [BorderPanel, ContainerPanel, PictureAdsPanel],
  defaultProps: {
    imageProps: {
      src: 'http://175.178.14.116:9000/avatars/01G330D6A7H9HDTAYG5ZWJT8W1.png'
    }
  },
  gridLayout: {
    h: 80
  },
  icon: 'https://s2.loli.net/2022/05/12/f4ZRjIVF7rOK3nS.png',
  component: {
    displayName: 'PictureAds',
    render: RenderView
  }
}

export default PictureAds
