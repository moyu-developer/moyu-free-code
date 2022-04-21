import * as React from 'react'
import {
  RenderNodeType,
  ReactComponent,
  ReactNodeBaseAttrProps
} from '@moyu-code/shared'

export interface MobileRenderProps {
  materialComponents: Record<string, ReactComponent>;
  remoteComponents?: string[];
  schema: RenderNodeType[];
  empty?: React.ReactNode;
  onContainerRender?: (e: React.ReactNode) => React.ReactNode;
  render?: (renderItem: {
    child: React.ReactNode;
    item: RenderNodeType;
    index: number;
  }) => React.ReactNode;
}

const MobileRender: React.FC<MobileRenderProps & ReactNodeBaseAttrProps> = (
  props
) => {
  /**
   * 物料组件的Ref缓存层
   * 需要使用者提供当前需要渲染的物料组件集合
   * */
  const materialComponentsRef = React.useRef<any>(props.materialComponents)

  React.useEffect(() => {
    /** Cache component */
    if (props.materialComponents) {
      materialComponentsRef.current = props.materialComponents
    }
  }, [props.materialComponents])

  const element = React.useMemo(() => {
    return props.schema.map((node, index) => {
      const MaterialComponent = materialComponentsRef.current[node.component]

      if (MaterialComponent) {
        const { children, ...componentProps } = node.props || {}
        if (props.render) {
          return props.render({
            child: (
              <MaterialComponent {...componentProps}>
                {children}
              </MaterialComponent>
            ),
            item: node,
            index: index
          })
        }
        return (
          <MaterialComponent {...componentProps} key={node.uid}>
            {children}
          </MaterialComponent>
        )
      } else {
        console.warn(
          `Warning: ${node.component}组件未找到，请检查materialComponents是否存在当前组件类型`,
          materialComponentsRef
        )
        return null
      }
    })
  }, [props.schema])

  return <>{props.onContainerRender ? props.onContainerRender(element) : element}</>
}

export default React.memo(MobileRender)
