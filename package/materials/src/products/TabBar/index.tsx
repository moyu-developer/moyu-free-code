import { MaterialComponentType } from '@moyu-code/shared'
import TabBar from './View'

const NoticeBarProduct: MaterialComponentType = {
  name: '底部导航',
  defaultProps: {
  },
  gridLayout: {
    h: 10
  },
  panel: [],
  component: {
    displayName: 'TabBar',
    render: TabBar
  }
}

export default NoticeBarProduct
