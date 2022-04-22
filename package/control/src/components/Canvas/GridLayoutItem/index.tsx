import React, { ReactNode } from 'react'
import cs from 'classnames'
import styles from './index.module.sass'

export interface GridLayoutItemProps {
  selected?: boolean,
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const GridLayoutItem = React.forwardRef<any, GridLayoutItemProps>(
  (props, ref) => {
    const { style, className, ...other } = props

    return (
      <div
        style={{ ...style }}
        className={cs(className, {
          [styles.selected]: props.selected
        })}
        ref={ref}
        {...other}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    )
  }
)

export default GridLayoutItem
