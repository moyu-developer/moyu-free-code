import { MaterialComponentType } from '@moyu-code/shared'
import GoodsList from './View'

const NoticeBarProduct: MaterialComponentType = {
  name: '商品列表',
  defaultProps: {
  },
  gridLayout: {
    minH: 4,
    h: 4
  },
  panel: [],
  component: {
    displayName: 'GoodsList',
    render: GoodsList
  }
}

export default NoticeBarProduct
