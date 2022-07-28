import React, { useRef } from 'react'
import ReactsGridLayout, { ReactGridLayoutProps } from 'react-grid-layout'
import type { RenderNodeType, ReactComponent } from '@moyu-code/shared';


export interface EditorLayoutRenderProps {
  components: Record<string, ReactComponent>;
  sourceData: RenderNodeType[];
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (node: RenderNodeType, element: JSX.Element) => JSX.Element
  gridLayoutProps?: ReactGridLayoutProps
}

export const EditorLayoutRender: React.FC<EditorLayoutRenderProps> = (props) => {

  const componentsRef = useRef(props.components)

  return (
    <div id='__grid-layout-render__' style={props.style} className={props.className}>
      <ReactsGridLayout
        className="layout"
        cols={24}
        rowHeight={5}
        margin={[0, 0]}
        width={375}
        onDropDragOver={() => ({ w: 24 })}
        useCSSTransforms
        isDroppable
        allowOverlap
        {...props.gridLayoutProps}
      >
        {
          props.sourceData.map((schema) => {
            /** 获取当前component */
            const Component = componentsRef.current?.[schema.component]
            const { children, ...componentProps } = schema.props
            return props.renderItem(schema, <Component {...componentProps} >{children}</Component>)
          })
        }
      </ReactsGridLayout>
    </div>
  )
}

EditorLayoutRender.defaultProps = {
  renderItem: (_, element) => element
}