import * as React from 'react'
import store from 'src/common/model'
import { Provider } from 'react-redux'
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/shared'
import 'react-resizable/css/styles.css'
import 'react-grid-layout/css/styles.css'
import styles from './index.module.sass'

export interface MaterialContainerProviderProps {
  /** 装修组件 */
  materials?: MaterialComponentType[],

  /** @name 页面id */
  id?: number,

  /** @name 页面高度 */
  height?: string | number

  /** @name Schema修改的Filter */
  onBeforeSchema?: (schema?: RenderNodeType[]) => RenderNodeType[]

  /** @name 远程依赖 */
  depends?: any
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

  React.useEffect(() => {
    if (props.depends?.resolve) {
      const resolve = props.depends?.resolve
      Object.values(resolve).forEach(async (url) => {
        await (window as any)?.System.import(url)
      })
    }
    store.dispatch.common.updated({
      depends: props.depends
    })
  }, [props.depends])

  return (
    <Provider store={store}>
      <div className={styles.page}>
        {props.children}
      </div>
    </Provider>
  )
}

ContainerProvider.defaultProps = {
}

export default ContainerProvider
