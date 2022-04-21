import * as React from 'react'
import ReactGridLayout from 'react-grid-layout'
import {
  MobileRenderProps,
  GridLayoutRender,
  GridLayoutRenderProps
} from '@moyu-code/renders'
import PreViewFieldNode, { PreViewFieldNodeProps } from './PreViewFieldNode'
import GridLayoutItem from './GridLayoutItem'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from 'src/common/model'
import { MaterialComponentType } from '@moyu-code/shared'
import { useThrottleFn } from 'ahooks'
import Screenshot from 'src/common/components/Screenshot'
import { ulid } from 'ulid'

interface MobileProps {
  materialComponents: MobileRenderProps['materialComponents'];
}

const Mobile: React.FC<MobileProps> = (props) => {
  const dispatch: Dispatch = useDispatch()
  const schema = useSelector(
    (state: RootState) => (state.schema as any)?.present
  )
  const scale = useSelector((state: RootState) => state.toolbar.scale / 100)
  const pageName = useSelector(
    (state: RootState) => state.common.pageInfo.name
  )
  const checkedUid = useSelector((state: RootState) => state.common.uid)

  /**
   *
   * @param element 当前渲染的children
   * @param renderCell 渲染的schema
   * @param componentIndex 层级
   * @returns 组件
   */
  const handleRenderFieldNode: GridLayoutRenderProps['onItemRender'] = (element, node) => {
    const { nodeData } = node
    return (
      <GridLayoutItem uid={nodeData.uid} key={nodeData.uid} data-grid={{ i: nodeData.uid, ...nodeData.gridLayout }}>
        {element}
      </GridLayoutItem>
    )
  }

  console.log(checkedUid, schema, 'checkedUid')

  /**
   * FieldNode 点击，通过uid选中当前的panel
   * @name uid 组件uuid，唯一生成的key
   */
  const onFieldNodeSelectedByUid: PreViewFieldNodeProps['onClick'] =
    React.useCallback(
      (uid: string) => {
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
  const onComponentViewResizeChange = React.useCallback<ReactGridLayout.ItemCallback>((...args) => {
    const record = args[2]
    dispatch.schema.setGridLayout(record)
  }, [dispatch])

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
      style={{
        transform: `scale(${scale})`
      }}
    >
      <Screenshot
        gridBackground
        title={pageName}
      >
        <GridLayoutRender
          height={750}
          width={375}
          sourceData={schema}
          components={props.materialComponents}
          onItemRender={handleRenderFieldNode}
          onRender={(element) => (
            <ReactGridLayout
              layout={layouts}
              isDroppable
              useCSSTransforms
              allowOverlap
              cols={24}
              margin={[0, 0]}
              rowHeight={30}
              width={375}
              style={{
                height: 750
              }}
              onDropDragOver={() => ({ w: 24 })}
              onDrop={onComponentDropCallback}
              onDragStop={onComponentViewResizeChange}
              onResizeStop={onComponentViewResizeChange}
            >
              {element}
            </ReactGridLayout>
          )}
        />
      </Screenshot>
    </div>
  )
}

export default Mobile
