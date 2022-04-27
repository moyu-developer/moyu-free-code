import { MaterialComponentType } from '@moyu-code/shared'
import { FontStylePanel } from 'src/panels/FontPanel'
import { NoticeBarPanel } from './customPanel'
import { RequestPanel } from 'src/panels/MethodPanel'
import { NoticeBar } from 'react-vant'

const Button: MaterialComponentType = {
  name: '公告提示',
  defaultProps: {
    text: 'testValue'
  },
  gridLayout: {
    minH: 4,
    h: 4
  },
  panel: [FontStylePanel, NoticeBarPanel, RequestPanel],
  component: {
    displayName: 'NoticeBar',
    render: NoticeBar
  }
}

export default Button
