import * as React from 'react'
import { useDrag } from 'react-dnd'
import { DropNames } from '../../../common/constant'
import type { MaterialComponentType } from '@moyu-code/schema'
import { Avatar, Typography, Space } from '@douyinfe/semi-ui'
import { useDispatch, useSelector } from 'react-redux'
import type { Dispatch, RootState } from 'src/common/model'
import styles from './index.module.sass'

const ComponentCard: React.FC<{
  schemaItem: MaterialComponentType;
}> = (props) => {
  const dispatch: Dispatch = useDispatch()
  const schema = useSelector((state: RootState) => state.common.schema)

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
    [schema, dispatch]
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
