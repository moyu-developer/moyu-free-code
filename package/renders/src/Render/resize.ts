import { RenderNodeType } from '@moyu-code/shared'
import { Big } from 'big.js'
import React from 'react'

export interface GridLayoutOptions {
  /** @name 行高大小 */
  rowHeight: number;
  col: number;
}

export class GridLayout {
  constructor (private readonly options: GridLayoutOptions) {}

  getLayoutArea (grid: RenderNodeType['gridLayout']): React.CSSProperties {
    if (!this.options.rowHeight) {
      throw new Error(
        'render: getLayoutArea fail, GridLayoutOptions.rowHeight not found.'
      )
    }

    const { x, y, w, h } = grid
    const colWidth = Big(100 / this.options.col)
    const colHeight = Big(this.options.rowHeight)
    return (
      {
        height: colHeight.times(h).toNumber(),
        width: parseFloat(colWidth.times(w).toString()) + 'vw',
        position: 'absolute',
        transform: `translate(${colWidth.times(x) + 'vw'}, ${colHeight.times(y).toNumber() + 'px'})`
      }
    )
  }
}
