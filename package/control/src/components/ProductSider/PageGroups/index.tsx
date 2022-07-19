import React, { useMemo } from 'react'
import Empty from 'src/common/components/Empty'
import { useSelector, useDispatch } from 'react-redux'
import GridLayout from "react-grid-layout";
import { Dispatch, RootState } from 'src/common/model';
import { Eye } from 'tabler-icons-react'
import type { RenderNodeType } from '@moyu-code/shared'
import styles from './index.module.sass'


const PageGroups = () => {

  const schema = useSelector((state: RootState) => state.schema?.present)

  const dispatch: Dispatch = useDispatch()

  const layout = [
    { i: "a", x:0, y: 1, w: 12, h: 1 },

    { i: "b", x: 0, y: 2, w: 12, h: 1 },
    { i: "c", x: 0, y: 3, w: 12, h: 1 }
  ];

  const renderLayout = useMemo(() => {
    if (schema) {
      return schema.map((item: RenderNodeType, index) => {
        return {
          i: item.uid,
          x: 0,
          y: index,
          w: 12,
          h: 1,
          name: item.component,
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
      >
        {
          renderLayout.map((layout) => (
            <div key={layout.i} className={styles.level}>
              <span>{layout.name}</span>
              <Eye/>
            </div>
          ))
        }
      </GridLayout> : <Empty/>
      }
      
    </div>
  )
}

export default React.memo(PageGroups)
