import React, { ReactNode } from 'react'
import ReactsGridLayout from 'react-grid-layout'
import type { SchemaRenderProps } from '../types'

export interface GridLayoutRenderProps extends SchemaRenderProps {
  renderItem: (element) => ReactNode
}

export const GridLayoutRenders: React.FC<GridLayoutRenderProps> = () => {

  return (
    <div>
      1
    </div>
  )
}