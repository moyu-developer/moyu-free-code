import { MaterialComponentType } from '@moyu-code/schema'
import FontPanel from '../../panels/FontPanel'
import BoxPanel from '../../panels/BoxPanel'
import CustomPanel from './customPanel'

const Button: MaterialComponentType = {
  name: '基础按钮',
  defaultProps: {
    color: 'primary',
    children: 'testValue',
    block: true
  },
  panel: [FontPanel, BoxPanel, CustomPanel],
  component: 'Button'
}

export default Button
