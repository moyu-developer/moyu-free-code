import React from 'react'
import { Layout } from 'react-grid-layout'
import styles from './index.module.scss'

export interface GridLayoutItemProps {
  uid: string;
  grid: Omit<Layout, 'i'>;
}

const GridLayoutItem: React.FC<GridLayoutItemProps> = (props) => {
  return (
    <div className={styles.gridItem} key={props.uid} data-grid={{ ...props.grid, i: props.uid }}>
      {props.children}
    </div>
  )
}
