import * as React from 'react'
import { RenderNodeType } from '@moyu-code/schema'

export interface MobileRenderProps {
  materialComponents: Record<string, React.FC | React.ComponentClass>,
  remoteComponents?: string[],
  schema: RenderNodeType[],
  render?: (element: React.ReactNode, item: RenderNodeType, index: number) => React.ReactNode
}

const MobileRender: React.FC<MobileRenderProps> = (props) => {
  /**
   * 物料组件的Ref缓存层
   * 需要使用者提供当前需要渲染的物料组件集合
   * */
  const materialComponentsRef = React.useRef<any>({})

  React.useEffect(() => {
    /** Cache component */
    if (props.materialComponents) {
      materialComponentsRef.current = props.materialComponents
    }
  }, [props.materialComponents])

  /** 通过schema，渲染组件树 */
  const schemaComponentTree = React.useMemo(() => {
    if (props.schema && props.schema.length > 0) {
      return props.schema.map((node, componentIndex) => {
        const MaterialComponent = materialComponentsRef.current[node.component]
        /** 判断当前组件是否已经传入 */
        if (MaterialComponent) {
          const { children, ...componentProps } = node.props || {}
          if (props.render) {
            const renderElement = props.render(
              <MaterialComponent {...componentProps}>
                {children}
              </MaterialComponent>, node, componentIndex)
            console.log(renderElement, 'renderElement')
            return renderElement
          }
          return (
            <MaterialComponent {...componentProps} key={node.uid}>
              {children}
            </MaterialComponent>
          )
        } else {
          console.warn(`Warning: ${node.component}组件未找到，请检查materialComponents是否存在当前组件类型`, materialComponentsRef)
          return null
        }
      })
    }
    return (
      <div style={{
        textAlign: 'center'
      }}
      >Not Found
      </div>
    )
  }, [props.schema, materialComponentsRef.current])

  return (
    <div>
      {
      schemaComponentTree
    }
    </div>
  )
}

export default MobileRender
