import { MaterialComponentType } from '@moyu-code/shared'
import * as TabBarPanel from './Panel'
import TabBar from './View'

const NoticeBarProduct: MaterialComponentType = {
  name: '底部导航',
  defaultProps: {
  },
  gridLayout: {
    h: 10
  },
  icon: 'https://s2.loli.net/2022/05/07/T69PWxZSyrowNqC.png',
  panel: [TabBarPanel],
  component: {
    displayName: 'TabBar',
    render: TabBar
  }
}

export default NoticeBarProduct
