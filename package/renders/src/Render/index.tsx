import React from 'react'
import {
  RenderNodeType,
  ReactComponent
} from '@moyu-code/shared'
import GridRow from './GridRow'

export interface GridLayoutRenderProps {
  onRender?: ((element: React.ReactNode) => React.ReactNode);
  height?: string | number;
  width?:string | number;
  sourceData: RenderNodeType[];
  components: Record<string, ReactComponent>;
  rowHeight?: number;
  className?: string;
  onItemRender?: (element: React.ReactNode, node?: {
    nodeData: RenderNodeType,
    index: number
  }) => React.ReactNode
}

const GridLayoutRender = (props: GridLayoutRenderProps) => {
  const element = React.useMemo(() => {
    const element = props.sourceData.map((node, index) => {
      const MaterialComponent = props.components[node.component]

      const { children, ...componentProps } = node.props || {}

      if (props.onItemRender) {
        return props.onItemRender(<MaterialComponent {...componentProps}>{children}</MaterialComponent>, {
          nodeData: node,
          index
        })
      }

      return (
        <GridRow {...node.gridLayout} key={node.uid}>
          <MaterialComponent {...componentProps}>{children}</MaterialComponent>
        </GridRow>
      )
    })

    if (props.onRender) {
      return props.onRender(element)
    }
    return element
  }, [props.sourceData, props.components, props.onRender])

  return (
    <div
      className={props.className}
      style={{
        height: props.height,
        width: props.width
      }}
    >
      {
        element
      }
    </div>
  )
}

export default GridLayoutRender
