import { MaterialComponentType } from '@moyu-code/shared'
import Render from './Render'

const PictureAds: MaterialComponentType = {
  name: '图片广告',
  panel: [],
  defaultProps: {
    src: 'https://img.yzcdn.cn/vant/cat.jpeg'
  },
  component: {
    displayName: 'PictureAds',
    render: Render
  }
}

export default PictureAds