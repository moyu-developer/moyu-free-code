import * as React from 'react'
import { useDrop } from 'react-dnd'
import GridLayout from 'react-grid-layout'
import { DropNames } from '../../common/constant'
import { MobileRender, MobileRenderProps } from '@moyu-code/renders'
import PreViewFieldNode, { PreViewFieldNodeProps } from './PreViewFieldNode'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from 'src/common/model'
import { MaterialComponentType, RenderNodeType } from '@moyu-code/shared'
import { useThrottleFn } from 'ahooks'
import Screenshot from 'src/common/components/Screenshot'
import { ulid } from 'ulid'

const layout = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2 },
  { i: 'b', x: 1, y: 0, w: 3, h: 2 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 }
]

const CustomGridItemComponent = React.forwardRef<any, any>(({ style, className, ...props }, ref) => {
  return (
    <div style={{ ...style }} className={className} ref={ref}>
      {/* Some other content */}
      c
    </div>
  )
})

interface MobileProps {
  materialComponents: MobileRenderProps['materialComponents'];
}

const Mobile: React.FC<MobileProps> = (props) => {
  const dispatch: Dispatch = useDispatch()
  const schema = useSelector((state: RootState) => (state.schema as any)?.present)
  const scale = useSelector((state: RootState) => state.toolbar.scale / 100)
  const pageName = useSelector((state: RootState) => state.common.pageInfo.name)
  const checkedUid = useSelector((state: RootState) => state.common.uid)
  /**
   * 拖拽时移动当前的组件。
   * @name dragIndex 拖动地址
   * @name targetIndex 目标地址
   */
  const { run: onMoveFieldCard } = useThrottleFn(
    (dragIndex: number, targetIndex: number) => {
      console.log(schema, 'schema')
      const item = schema[dragIndex]

      if (!item) throw new Error('操作数据不存在')

      /** 先删除一条数据，也就是我们正在drag中的组件。 */
      schema.splice(dragIndex, 1)

      /** hover结束后，把删除的item给放置进去 */
      schema.splice(targetIndex, 0, item)
      dispatch.schema.updated([...schema])
    }
  )

  const [{ canDrop, isOver }, mobileDrop] = useDrop(
    () => ({
      accept: DropNames.Component,
      drop: (item: MaterialComponentType, monitor) => {
        const didDrop = monitor.didDrop()
        const uid = ulid()
        if (!didDrop) {
          // dispatch.common.updated({
          //   uid
          // })
          // dispatch.schema.add({
          //   uid: uid,
          //   component: item.component.displayName,
          //   props: item.defaultProps
          // })
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
  const handleRenderFieldNode: MobileRenderProps['render'] = (bridge) => {
    const { item: renderCell, index, child } = bridge
    return (
      <PreViewFieldNode
        key={renderCell?.uid}
        uid={renderCell?.uid as string}
        index={index}
        hasSelected={checkedUid === renderCell?.uid}
        onMoveFieldCard={onMoveFieldCard}
        onClick={onFieldNodeSelectedByUid}
      >
        {child}
      </PreViewFieldNode>
    )
  }

  console.log(checkedUid, schema, 'checkedUid')

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

  /**
   * 当组件卡片落地
   * @param layout 页面落地网格layout布局
   * @param grid 当前组件所处网格
   * @param event 事件回调
   */
  const onComponentDropCallback = (layout: GridLayout.Layout[], grid: GridLayout.Layout, event) => {
    const dropComponentSchema: MaterialComponentType = JSON.parse(event.dataTransfer.getData('schemaItem'))
    const uid = ulid()
    dispatch.common.updated({
      uid
    })
    dispatch.schema.add({
      uid: uid,
      component: dropComponentSchema.component.displayName,
      props: dropComponentSchema.defaultProps,
      gridLayout: grid
    })
  }

  return (
    <div
      ref={mobileDrop} style={{
        transform: `scale(${scale})`
      }}
    >
      <Screenshot
        gridBackground
        title={pageName} style={{
          width: 375
        }}
      >
        <div style={{
          height: 750
        }}
        >
          <GridLayout
            isDroppable
            onLayoutChange={(layout) => console.log(layout, 'GridLayout.onLayoutChange')}
            className='layout'
            useCSSTransforms
            allowOverlap
            cols={12}
            margin={[0, 0]}
            rowHeight={30}
            width={375}
            onDrop={onComponentDropCallback}
          >
            {/* {
              layout.map(el => {
                return <div key={el.i} data-grid={el}>{el.i}</div>
              })
            } */}
            <MobileRender
              schema={schema}
              materialComponents={props.materialComponents}
              render={handleRenderFieldNode}
            />
          </GridLayout>

        </div>
      </Screenshot>
    </div>
  )
}

export default Mobile
