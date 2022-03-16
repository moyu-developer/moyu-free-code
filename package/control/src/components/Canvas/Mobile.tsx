import * as React from 'react'
import { Typography } from '@douyinfe/semi-ui'
import { useDrop } from 'react-dnd'
import styles from './index.module.sass'
import { DropNames } from '../../common/constant'
import { MobileRender, MobileRenderProps } from '@moyu-code/renders'
import PreViewFieldNode, { PreViewFieldNodeProps } from './PreViewFieldNode'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from 'src/common/model'
import { MaterialComponentType } from '@moyu-code/schema'
import { useThrottleFn } from 'ahooks'
import { ulid } from 'ulid'

interface MobileProps {
  materialComponents: MobileRenderProps['materialComponents'];
}

const Mobile: React.FC<MobileProps> = (props) => {
  const dispatch: Dispatch = useDispatch()
  const schema = useSelector((state: RootState) => state.common.schema)
  const checkedUid = useSelector((state: RootState) => state.common.uid)
  /**
   * 拖拽时移动当前的组件。
   * @name dragIndex 拖动地址
   * @name targetIndex 目标地址
   */
  const { run: onMoveFieldCard } = useThrottleFn(
    (dragIndex: number, targetIndex: number) => {
      const item = schema[dragIndex]

      if (!item) throw new Error('操作数据不存在')

      /** 先删除一条数据，也就是我们正在drag中的组件。 */
      schema.splice(dragIndex, 1)

      /** hover结束后，把删除的item给放置进去 */
      schema.splice(targetIndex, 0, item)
      dispatch.common.updated({
        schema: [...schema]
      })
    }
  )

  const [{ canDrop, isOver }, mobileDrop] = useDrop(
    () => ({
      accept: DropNames.Component,
      drop: (item: MaterialComponentType, monitor) => {
        const didDrop = monitor.didDrop()
        const uid = ulid()
        if (!didDrop) {
          dispatch.common.updated({
            schema: [
              ...schema,
              {
                uid: uid,
                component: item.component,
                props: item.defaultProps
              }
            ],
            uid,
            panels: item.panel
          })
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }),
    [schema, dispatch]
  )

  /**
   *
   * @param element 当前渲染的children
   * @param renderCell 渲染的schema
   * @param componentIndex 层级
   * @returns 组件
   */
  const handleRenderFieldNode: MobileRenderProps['render'] = (
    element,
    renderCell,
    componentIndex
  ) => {
    return (
      <PreViewFieldNode
        key={renderCell?.uid}
        uid={renderCell?.uid as string}
        index={componentIndex}
        hasSelected={checkedUid === renderCell?.uid}
        onMoveFieldCard={onMoveFieldCard}
        onClick={onFieldNodeSelectedByUid}
      >
        {element}
      </PreViewFieldNode>
    )
  }

  /**
   * FieldNode 点击，通过uid选中当前的panel
   * @name uid 组件uuid，唯一生成的key
   */
  const onFieldNodeSelectedByUid: PreViewFieldNodeProps['onClick'] = React.useCallback((uid: string) => {
    if (uid) {
      dispatch.common.updated({
        uid
      })
    } else {
      console.warn('Warning: 组件需要传入uid，通过uuid()方法生成，它具有页面的唯一性。当前uid: ', uid)
    }
  }, [dispatch])

  const canMoveHover = canDrop && isOver

  return (
    <div className={styles.canvasMobile} ref={mobileDrop}>
      <div className={styles.canvasMobileTitle}>
        <Typography.Title heading={6} className={styles.canvasMobileTitle}>页面标题</Typography.Title>
      </div>
      <div className={styles.canvasMobileContent}>
        <MobileRender
          schema={schema}
          materialComponents={props.materialComponents}
          render={handleRenderFieldNode}
        />
      </div>
    </div>
  )
}

export default Mobile
