import * as React from 'react'
import { useDrop, useDrag } from 'react-dnd'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Dispatch, RootState } from 'src/common/model'
import { DropNames } from '../../../common/constant'
import MoveHoverNode, {
  HoverNodeAction,
  MoveHoverNodeProps
} from '../MoveHoverNode'
import { ulid } from 'ulid'
import cs from 'classnames'
import styles from './index.module.sass'

const { useRef } = React

export interface PreViewFieldNodeProps {
  uid?: string;
  index: number;
  hasSelected: boolean;
  onMoveFieldCard?: (dragIndex: number, targetIndex: number) => void;
  onClick?: (uid: string) => void;
}

const PreViewFieldNode: React.FC<PreViewFieldNodeProps> = (props) => {
  const { uid, schema } = useSelector(
    (state: RootState) => ({
      uid: state.common.uid,
      schema: state.common.schema
    }),
    shallowEqual
  )

  const dispatch: Dispatch = useDispatch()

  const onTriggerFieldNodeAction: MoveHoverNodeProps['onTrigger'] =
    React.useCallback(
      async (type) => {
        const moveData = schema?.[props.index]
        switch (type) {
          case HoverNodeAction.MOVE_UP:
            schema[props.index] = schema[props.index - 1]
            schema[props.index - 1] = moveData
            dispatch.common.updated({
              schema: [...schema]
            })

            break
          case HoverNodeAction.MOVE_DOWN:
            schema[props.index] = schema[props.index + 1]
            schema[props.index + 1] = moveData
            dispatch.common.updated({
              schema: [...schema]
            })
            break

          case HoverNodeAction.COPY:
            schema.splice(props.index, 0, {
              ...moveData,
              uid: ulid()
            })
            dispatch.common.updated({
              schema: [...schema]
            })
            break
          case HoverNodeAction.DELETE:
            schema.splice(props.index, 1)
            dispatch.common.updated({
              schema: [...schema]
            })
            break

          default:
            break
        }
        return true
      },
      [uid, schema, dispatch, props.index]
    )

  /**
   * 当前FieldNode点击事件
   */
  const handleFieldWrapClick = React.useCallback(() => {
    if (!props.uid) {
      console.warn(
        '当前Field未传入uid，onClick失效，请检查props。当前props：',
        props
      )
      return
    }

    if (!props.onClick) {
      console.warn(
        '当前Field未传入onClick Event，onClick失效，请检查props。当前props：',
        props
      )
      return
    }
    props.onClick(props.uid)
  }, [props.uid, props.onClick])

  /** 当前field 绑定的Element */
  const fieldRef = useRef<HTMLDivElement | null>(null)

  const [_, drop] = useDrop({
    accept: DropNames.Field,
    hover (item: any, monitor) {
      if (!fieldRef.current) return

      const dragIndex = item.index
      const hoverIndex = props.index || 0

      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = fieldRef.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset() || { y: 0 }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      if (props.onMoveFieldCard) props.onMoveFieldCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: DropNames.Field,
    item: () => {
      return { uid: props.uid, index: props.index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  drag(drop(fieldRef))

  return (
    <div
      ref={fieldRef}
      className={cs(styles.renderNode, {
        [styles.selected]: props.hasSelected
      })}
      style={{ opacity: isDragging ? 0.3 : 1 }}
      onClick={handleFieldWrapClick}
    >
      {props.children}
      {props.hasSelected
        ? (
          <MoveHoverNode
            uid={uid}
            key={props.index}
            schema={schema}
            onTrigger={onTriggerFieldNodeAction}
          />
          )
        : null}
    </div>
  )
}

export default PreViewFieldNode
