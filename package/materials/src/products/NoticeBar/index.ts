import { MaterialComponentType } from '@moyu-code/shared'
import { FontStylePanel } from '../../panels/FontPanel'
import { NoticeBarPanel } from './customPanel'
import { NoticeBar } from 'react-vant'

const Button: MaterialComponentType = {
  name: '公告提示',
  defaultProps: {
    text: 'testValue'
  },
  panel: [FontStylePanel, NoticeBarPanel],
  component: {
    displayName: 'NoticeBar',
    render: NoticeBar
  }
}

export default Button
