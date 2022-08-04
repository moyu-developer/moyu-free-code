import * as  React from 'react'
import type { SchemaRenderProps } from '../../typings'

const ContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridAutoRows: 5,
  height: '100vh'
}

export interface MobileRenderProps extends SchemaRenderProps {
}

export const MobileRender: React.FC<MobileRenderProps> = (props) => {

  return (
    <div>
      <div style={ContainerStyle}>
        {
          props.sourceData.map((schema) => {
            /** 获取当前component */
            const Component = props.components?.[schema.component]
            const { children, ...componentProps } = schema.props
            const { gridLayout } = schema
            console.log(gridLayout, 'gridLayout')

            if (Component) {
              return <div key={schema.uid} 
              style={{
                display: 'inline-block',
                gridArea: `${gridLayout.x + 1} / ${gridLayout.y + 1} / ${gridLayout.x + gridLayout.w + 1} / ${gridLayout.y + gridLayout.h + 1}`}}
                >
                  <Component {...componentProps} >{children}</Component>
                </div>
            }
            return <div>Error: { schema.component } is not found </div>
          })
        }
        <div>
        </div>
      </div>
    </div>
  )
}