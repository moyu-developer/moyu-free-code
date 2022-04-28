import { RenderNodeType } from '@moyu-code/shared'
import BigNumber from 'bignumber.js'
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
    const colWidth = new BigNumber(100 / this.options.col)
    const colHeight = new BigNumber(this.options.rowHeight)

    console.log(grid, colWidth, colHeight, 'resize')
    return {
      position: 'absolute',
      height: colHeight.multipliedBy(h).toNumber(),
      width: colWidth.multipliedBy(w).toNumber() + 'vw',
      transform: `translate(${colWidth
        .multipliedBy(x - 1)
        .toNumber()}vw, ${colHeight.multipliedBy(y - 1).toNumber()})px`
    }
  }
}
