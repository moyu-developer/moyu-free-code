import * as React from 'react'
import { useDrag } from 'react-dnd'
import { DropNames } from '../../../common/constant'
import type { MaterialComponentType } from '@moyu-code/shared'
import { Avatar } from 'antd'
import styles from './index.module.sass'

const ComponentCard: React.FC<{
  schemaItem: MaterialComponentType;
}> = (props) => {
  const [_, drag] = useDrag(
    () => ({
      type: DropNames.Component,
      item: {
        ...props.schemaItem,
        type: 'card'
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    []
  )

  return (
    <div ref={drag} className={styles.card}>
      <div className={styles.cardImage}>
        <Avatar shape='square' style={{ margin: 4 }}>
          U
        </Avatar>
      </div>
      <div className={styles.cardName}>{props.schemaItem.name}</div>
    </div>
  )
}

export default ComponentCard
