import { MaterialComponentType } from '@moyu-code/shared'
import * as FontPanel from 'src/panels/FontPanel'
import * as NoticeBarPanel from './Panel'
import * as RequestPanel from 'src/panels/RequestPanel'
import NoticeBar from './View'

const NoticeBarProduct: MaterialComponentType = {
  name: '公告提示',
  defaultProps: {
    text: 'testValue'
  },
  gridLayout: {
    minH: 4,
    h: 4
  },
  icon: 'https://s2.loli.net/2022/05/07/u8ydWT6PmoBcJKi.png',
  panel: [FontPanel, NoticeBarPanel, RequestPanel],
  component: {
    displayName: 'NoticeBar',
    render: NoticeBar
  }
}

export default NoticeBarProduct
