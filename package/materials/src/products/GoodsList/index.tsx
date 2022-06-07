import { MaterialComponentType } from '@moyu-code/shared'
import GoodsListView from './View'
import * as GoodsListPanel from './Panel'
import * as RequestPanel from 'src/panels/RequestPanel'

const GoodsList: MaterialComponentType = {
  name: '商品列表',
  defaultProps: {
  },
  gridLayout: {
    minH: 80,
    h: 100
  },
  icon: 'https://s2.loli.net/2022/05/07/GZTxnQFpBmKd2i6.png',

  panel: [GoodsListPanel, RequestPanel],
  component: {
    displayName: 'GoodsList',
    render: GoodsListView
  }
}

export default GoodsList
