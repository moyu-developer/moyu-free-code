import * as React from 'react'
import type { MaterialComponentType } from '@moyu-code/shared'
import { Image } from 'antd'
import styles from './index.module.sass'

const ComponentCard: React.FC<{
  schemaItem: MaterialComponentType;
}> = (props) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', '')
        e.dataTransfer.setData('schemaItem', JSON.stringify(props.schemaItem))
      }}
      unselectable='on'
      className={styles.card}
    >
      <div className={styles.cardImage}>
        <Image
          height={24}
          width={24}
          src={props.schemaItem.icon}
          preview={false}
        />
      </div>
      <div className={styles.cardName}>{props.schemaItem.name}</div>
    </div>
  )
}

export default ComponentCard
