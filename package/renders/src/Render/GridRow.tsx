import React from 'react'
import { RenderNodeType } from '@moyu-code/shared'

const GridItem: React.FC<RenderNodeType['gridLayout']> = (props) => {
  return (
    <div style={{
      position: 'absolute'
    }}
    >
      {props.children}
    </div>
  )
}

export default GridItem
