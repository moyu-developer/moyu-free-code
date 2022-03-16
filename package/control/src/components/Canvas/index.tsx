import * as React from 'react'
import { Col } from '@douyinfe/semi-ui'
import Mobile from './Mobile'
import DevInfo from './DevInfo'
import { MobileRenderProps } from '@moyu-code/renders'
import Toolbar from './Toolbar'
import styles from './index.module.sass'

interface MaterialRenderCanvasProps {
  materialComponents?: MobileRenderProps['materialComponents']
}

const MaterialRenderCanvas: React.FC<MaterialRenderCanvasProps> = (props) => {
  return (
    <Col className={styles.canvas}>
      <DevInfo />
      <Mobile materialComponents={props.materialComponents || {}} />
      <Toolbar />
    </Col>
  )
}

export default MaterialRenderCanvas
