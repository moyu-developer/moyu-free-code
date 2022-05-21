import { Row } from 'antd'
import * as React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import store from 'src/common/model'
import { Provider } from 'react-redux'
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/shared'
import 'react-resizable/css/styles.css'
import 'react-grid-layout/css/styles.css'
import './index.module.sass'

export interface MaterialContainerProviderProps {
  /** 装修组件 */
  materials?: MaterialComponentType[],

  /** @name 页面id */
  id?: number,

  /** @name 页面高度 */
  height?: string | number

  /** @name Schema修改的Filter */
  onBeforeSchema?: (schema?: RenderNodeType[]) => RenderNodeType[]
}

const ContainerProvider: React.FC<MaterialContainerProviderProps> = (props) => {
  /**
   * 当前effect主要是将物料存入到store中，后续切换面板使用。
   * @effect { MaterialComponentType }
   */
  React.useEffect(() => {
    if (props.materials) {
      store.dispatch.common.updated({
        materials: props.materials
      })
    }
  }, [
    props.materials
  ])

  React.useEffect(() => {
    if (props?.id) {
      store.dispatch.common.applyGetViewDetailById(props?.id)
    }
  }, [props?.id])

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Row>
          {props.children}
        </Row>
      </DndProvider>
    </Provider>
  )
}

ContainerProvider.defaultProps = {
}

export default ContainerProvider
