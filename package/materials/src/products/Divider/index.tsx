import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as DividerPanel from './Panel'

const Divider: MaterialComponentType = {
  name: '分割线',
  defaultProps: {
  },
  gridLayout: {
    minH: 4,
    h: 10
  },
  icon: 'https://s2.loli.net/2022/05/07/MJfW2PmFqiw7Rn1.png',
  panel: [DividerPanel],
  component: {
    displayName: 'Divider',
    render: RenderView
  }
}

export default Divider
