import * as React from 'react'
import ReactsGridLayout, { ReactGridLayoutProps } from 'react-grid-layout'
import type { SchemaRenderProps } from '../../typings'
import type { RenderNodeType, ReactComponent } from '@moyu-code/shared';


export interface EditorLayoutRenderProps extends SchemaRenderProps {
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (node: RenderNodeType, element: JSX.Element) => JSX.Element
  gridLayoutProps?: ReactGridLayoutProps
}

export const EditorLayoutRender: React.FC<EditorLayoutRenderProps> = (props) => {

  const componentsRef = React.useRef(props.components)

  return (
    <div id='__grid-layout-render__' style={{ ...props.style, height: '100%' }} className={props.className}>
      <ReactsGridLayout
        className="layout"
        cols={24}
        rowHeight={5}
        margin={[0, 0]}
        onDropDragOver={() => ({ w: 24 })}
        useCSSTransforms
        isDroppable
        // allowOverlap
        {...props.gridLayoutProps}
      >
        {
          props.sourceData.map((schema) => {
            /** 获取当前component */
            const Component = componentsRef.current?.[schema.component]
            const { children, ...componentProps } = schema.props

            if (Component) {
              return props.renderItem(schema, <Component {...componentProps} >{children}</Component>)
            }
            return <div>Error: { schema.component } is not found </div>
          })
        }
      </ReactsGridLayout>
    </div>
  )
}

EditorLayoutRender.defaultProps = {
  renderItem: (_, element) => {
    const { w, h, x, y } = _.gridLayout
    console.log( _.gridLayout, ' _.gridLayout')
    return (
      <div style={{display: 'inline-block'}} key={_.uid} data-grid={{i: _.uid, w, h, x, y, static: true}}>{element}</div>
    )
  }
}