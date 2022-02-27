import * as React from "react";
import { RenderNodeType } from '@moyu-code/schema'

export interface MobileRenderProps {
  materialComponents: Record<string, React.FC | React.ComponentClass>,
  remoteComponents?: string[],
  schema: RenderNodeType[],
  render?: (element: React.ReactNode, item?: RenderNodeType) => React.ReactNode
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
      return props.schema.map(node => {
        const MaterialComponent = materialComponentsRef.current[node.component]
        if (MaterialComponent) {
          const { children, ...componentProps } = node.props || {}
          if (props.render) {
            return props.render(<MaterialComponent {...componentProps}>
              children
            </MaterialComponent>, node)
          }
          return <MaterialComponent {...componentProps}>
            children
          </MaterialComponent>
        } else {
          return null
        }
      }) 
    }
    return <div style={{
      textAlign: 'center'
    }}>Not Found</div>
  }, [props.schema, materialComponentsRef.current])


  return <div>
    {
      schemaComponentTree
    }
  </div>
}

export default MobileRender