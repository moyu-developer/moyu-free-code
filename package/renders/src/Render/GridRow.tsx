import React, { useRef } from 'react'
import { RenderNodeType } from '@moyu-code/shared'
import { GridLayout } from './resize'

const GridItem: React.FC<RenderNodeType['gridLayout']> = (props) => {
  const gridLayoutRef = useRef<GridLayout>(new GridLayout({
    col: 24,
    rowHeight: 5
  }))
  return (
    <div style={gridLayoutRef.current.getLayoutArea(props)}>
      {props.children}
    </div>
  )
}

export default GridItem
