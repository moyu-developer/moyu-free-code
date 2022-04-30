import React from 'react'
import { Col } from 'antd'
import Mobile from './Mobile'
import { MobileRenderProps } from '@moyu-code/renders'
import Toolbar from './Toolbar'
import cs from 'classnames'
import styles from './index.module.sass'

interface MaterialRenderCanvasProps {
  materialComponents?: MobileRenderProps['materialComponents']
}

const MaterialRenderCanvas: React.FC<MaterialRenderCanvasProps> = (props) => {
  return (
    <Col className={cs(styles.canvas, '__control_canvas__')}>
      <Toolbar />
      <Mobile materialComponents={props.materialComponents || {}} />
    </Col>
  )
}

export default MaterialRenderCanvas
