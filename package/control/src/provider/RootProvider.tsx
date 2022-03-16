import { Row, Empty } from '@douyinfe/semi-ui'
import * as React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import store from '../common/model'
import { Provider } from 'react-redux'
import { MaterialComponentType } from '@moyu-code/schema'
import './index.module.sass'

export interface MaterialContainerProviderProps {
  materials?: MaterialComponentType[]
}

const MaterialContainerProvider: React.FC<MaterialContainerProviderProps> = (props) => {
  /**
   * 当前effect主要是将物料存入到store中，后续切换面板使用。
   * @effect { MaterialComponentType }
   */
  React.useEffect(() => {
    if (props.materials) {
      store.dispatch.common.setMaterialComponents(props.materials)
    }
  }, [
    props.materials
  ])

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Row type='flex'>
          {props.children || (
            <Empty
              title='功能建设中'
              description='当前功能暂未开放，敬请期待。'
            />
          )}
        </Row>
      </DndProvider>
    </Provider>
  )
}

export default MaterialContainerProvider
