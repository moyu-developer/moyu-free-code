import React, { useMemo } from 'react'
import Empty from 'src/common/components/Empty'
import { useSelector, useDispatch } from 'react-redux'
import GridLayout, { ReactGridLayoutProps } from "react-grid-layout";
import { Dispatch, RootState } from 'src/common/model';
import { Eye, EyeOff } from 'tabler-icons-react'
import type { RenderNodeType } from '@moyu-code/shared'
import styles from './index.module.sass'


const PageGroups = () => {

  const schema = useSelector((state: RootState) => state.schema?.present)
  const dispatch: Dispatch = useDispatch()

  const handleLevelDragStop: ReactGridLayoutProps['onDragStop'] = (layouts) => {
    const ids = layouts.map(item => item.i)
    const newSchema = ids.map((uid: string) => {
      const findSchemaItem = schema.find(data => data.uid === uid)
      return findSchemaItem
    })
    dispatch.schema.updated(newSchema)
  }

  const handleLevelHiddenView = (uid: string, isSHow: boolean) => {
    dispatch.schema.setProps({
      uid,
      props: {
        style: {
          display: isSHow ? 'none' : undefined
        }
      }
    })
  }

  const renderLayout: Array<ReactGridLayoutProps['layout'][0] & {
    name: string;
    isShow: boolean
  }> = useMemo(() => {
    if (schema) {
      return schema.map((item: RenderNodeType, index) => {
        return {
          i: item.uid,
          x: 0,
          y: index,
          w: 12,
          h: 1,
          name: item.component,
          isShow: item.props?.style?.display !== 'none'
        }
      })
    }
    return []
  }, [schema])

  return (
    <div className={styles.page}>
      {
        renderLayout?.length > 0 ? <GridLayout
        className="layout"
        layout={renderLayout}
        cols={12}
        rowHeight={30}
        width={276}
        resizeHandles={[]}
        onDragStop={handleLevelDragStop}
      >
        {
          renderLayout.map((layout) => (
            <div key={layout.i} className={styles.treeItem}>
              <span>{layout.name}</span>
              <div onClick={() => handleLevelHiddenView(layout.i, layout.isShow)} className={styles.treeItemIcon}>
                {layout.isShow ? <EyeOff/> :<Eye/>}
              </div>
            </div>
          ))
        }
      </GridLayout> : <Empty/>
      }
      
    </div>
  )
}

export default React.memo(PageGroups)
