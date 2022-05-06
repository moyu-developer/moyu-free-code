import { MaterialComponentType } from '@moyu-code/shared'
import Typography from './View'
import * as TypographyPanel from './Panel'
import * as FontPanel from 'src/panels/FontPanel'

const TypographyProduct: MaterialComponentType = {
  name: '文本',
  defaultProps: {
  },
  gridLayout: {
    minH: 4,
    h: 10
  },
  icon: '',
  panel: [FontPanel, TypographyPanel],
  component: {
    displayName: 'Typography',
    render: Typography
  }
}

export default TypographyProduct
