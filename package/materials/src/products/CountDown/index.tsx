import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as CountDownPanel from './Panel'

const CountDown: MaterialComponentType = {
  name: '倒计时',
  defaultProps: {
  },
  gridLayout: {
    minH: 4,
    h: 10
  },
  icon: 'https://s2.loli.net/2022/05/07/MJfW2PmFqiw7Rn1.png',
  panel: [CountDownPanel],
  component: {
    displayName: 'CountDown',
    render: RenderView
  }
}

export default CountDown
