import * as React from 'react'
import ReactGridLayout from 'react-grid-layout'
import {
  GridLayoutRender,
  GridLayoutRenderProps
} from '@moyu-code/renders'
import GridLayoutItem from '../GridLayoutItem'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from 'src/common/model'
import { MaterialComponentType } from '@moyu-code/shared'
import Screenshot from 'src/common/components/Screenshot'
import MoveHoverNode, {
  HoverNodeAction,
  MoveHoverNodeProps
} from '../MoveHoverNode'
import { ulid } from 'ulid'
import styles from './index.module.sass'

interface MobileProps {
  materialComponents: GridLayoutRenderProps['components'];
}

const Mobile: React.FC<MobileProps> = (props) => {
  const dispatch: Dispatch = useDispatch()
  const schema = useSelector(
    (state: RootState) => (state.schema as any)?.present
  )
  const scale = useSelector((state: RootState) => state.toolbar.scale / 100)
  const background = useSelector((state: RootState) => state.common.pageInfo.background)
  const pageName = useSelector(
    (state: RootState) => state.common.pageInfo.name
  )
  const selectedId = useSelector((state: RootState) => state.common?.uid)

  /**
   * 处理Render子节点
   * @param element 当前渲染的children
   * @param renderCell 渲染的schema
   * @param componentIndex 层级
   * @returns 组件
   */
  const handleRenderFieldNode: GridLayoutRenderProps['onItemRender'] = (
    element,
    node
  ) => {
    const { nodeData } = node
    return (
      <GridLayoutItem
        id={nodeData.component + nodeData.uid}
        selected={selectedId === nodeData.uid}
        onClick={() => onFieldNodeSelectedById(nodeData.uid)}
        key={nodeData.uid}
        data-grid={{ i: nodeData.uid, ...nodeData.gridLayout, resizeHandles: ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'] }}
      >
        {element}
      </GridLayoutItem>
    )
  }

  /**
   * FieldNode 点击，通过uid选中当前的panel
   * @name uid 组件uuid，唯一生成的key
   */
  const onFieldNodeSelectedById = React.useCallback(
    (uid: React.Key) => {
      if (uid) {
        dispatch.common.updated({
          uid
        })
      } else {
        console.warn(
          'Warning: 组件需要传入uid，通过uuid()方法生成，它具有页面的唯一性。当前uid: ',
          uid
        )
      }
    },
    [dispatch]
  )

  /**
   * 当组件卡片落地
   * @param layout 页面落地网格layout布局
   * @param grid 当前组件所处网格
   * @param event 事件回调
   */
  const onComponentDropCallback = (
    _: ReactGridLayout.Layout[],
    grid: ReactGridLayout.Layout,
    event
  ) => {
    const dropComponentSchema: MaterialComponentType = JSON.parse(
      event.dataTransfer.getData('schemaItem')
    )
    const { gridLayout = {} } = dropComponentSchema
    const uid = ulid()
    const { i, ...layout } = grid
    dispatch.schema.add({
      uid: uid,
      component: dropComponentSchema.component.displayName,
      props: dropComponentSchema.defaultProps,
      gridLayout: {
        ...layout,
        ...gridLayout,
        w: 24
      }
    })
    dispatch.common.updated({
      uid
    })
  }

  /**
   * 组件视图发生改变后的回调
   * @param layout 页面布局
   * @param oldItem 旧的组件布局
   * @param newItem 新的组件布局
   * @param event drag事件回调
   * @param placeholder 描述
   * @param element 元素
   */
  const onComponentViewResizeChange =
    React.useCallback<ReactGridLayout.ItemCallback>(
      (...args) => {
        console.log(args, '组件发生改变了')
        const record = args[2]
        dispatch.schema.setGridLayout(record)
      },
      [dispatch]
    )

  /**
   * 操作面板回调
   * @action { HoverNodeAction.MOVE_UP } 上移
   * @action { HoverNodeAction.MOVE_DOWN } 下移
   * @action { HoverNodeAction.COPY }复制
   * @action { HoverNodeAction.DELETE } 删除
   */
  const onTriggerFieldNodeAction: MoveHoverNodeProps['onTrigger'] =
    React.useCallback(
      async (type) => {
        const selectedIndex: number = schema.findIndex(
          (v) => v.uid === selectedId
        )
        if (selectedIndex >= 0) {
          switch (type) {
            case HoverNodeAction.MOVE_UP:
              dispatch.schema.up(selectedIndex)

              break
            case HoverNodeAction.MOVE_DOWN:
              dispatch.schema.down(selectedIndex)
              break

            case HoverNodeAction.COPY:
              dispatch.schema.copy(selectedIndex)
              break
            case HoverNodeAction.DELETE: {
              dispatch.schema.delete(selectedIndex)
              const sliceItem = schema?.[selectedIndex - 1]
              dispatch.common.updated({
                uid: sliceItem ? sliceItem.uid : undefined
              })
            }
              break

            default:
              break
          }
          return true
        }
        console.warn(
          `onTriggerFieldNodeAction params [selected] position ${selectedId}...`
        )
        return false
      },
      [selectedId, schema]
    )

  /**
   * 获取页面的layouts布局
   * @description 将页面的gridLayout单独提取出来
   */
  const layouts = React.useMemo(() => {
    return schema.map((data) => ({
      i: data.uid,
      ...data.gridLayout
    }))
  }, [schema])

  return (
    <div
      className={styles.mobileWrapper} style={{
        transform: `scale(${scale})`
      }}
    >
      <Screenshot gridBackground title={pageName}>
        {selectedId
          ? (
            <MoveHoverNode
              uid={selectedId}
              schema={schema}
              onTrigger={onTriggerFieldNodeAction}
            />
            )
          : null}
        <GridLayoutRender
          height={850}
          width={375}
          sourceData={schema}
          components={props.materialComponents}
          onItemRender={handleRenderFieldNode}
          onRender={(element) => (
            <ReactGridLayout
              style={{
                height: 850,
                background
              }}
              className={styles.mobileLayout}
              layout={layouts}
              allowOverlap
              isDroppable
              useCSSTransforms
              cols={24}
              margin={[0, 0]}
              rowHeight={5}
              width={375}
              onDropDragOver={() => ({ w: 24 })}
              onDrop={onComponentDropCallback}
              onDragStop={onComponentViewResizeChange}
              onResizeStop={onComponentViewResizeChange}
            >
              {element as any}
            </ReactGridLayout>
          )}
        />
      </Screenshot>
    </div>
  )
}

export default Mobile
