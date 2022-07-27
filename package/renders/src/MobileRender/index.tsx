import React, { ReactNode } from 'react'
import ReactsGridLayout from 'react-grid-layout'
import type { SchemaRenderProps } from '../types'

const layout = [
  { i: "a", x: 1, y: 1, w: 5, h: 5},
];

const ContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridAutoRows: '30px',
  height: '100vh'
}

export interface GridLayoutRenderProps extends SchemaRenderProps {
  renderItem: (element) => ReactNode
}

export const MobileRender: React.FC<GridLayoutRenderProps> = () => {

  return (
    <div>
      <div style={ContainerStyle}>
        {
          layout.map(item => <div key={item.i} 
            style={{ 
              background: 'blue', 
              gridArea: `${item.x + 1} / ${item.y + 1} / ${item.x + item.w + 1} / ${item.y + item.h + 1}`}}
              >a111</div>
            )
        }
        <div>
          
        </div>
      </div>
    </div>
  )
}