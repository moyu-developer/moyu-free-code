import * as React from 'react'
import { Col, Tree } from '@douyinfe/semi-ui'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from 'src/common/model'
import { TreeNodeData } from '@douyinfe/semi-ui/lib/es/tree'
import CardBox from '../../../common/components/CardBox'
import styles from './index.module.sass'
import { IconHandle } from '@douyinfe/semi-icons'

const ComponentTree = () => {
  const schema = useSelector((state: RootState) => state.common.schema, shallowEqual)

  const treeNode = React.useMemo(() => {
    return schema.map((node) => ({
      label: node.component,
      value: node.uid,
      key: node.uid,
      icon: <IconHandle />,
      children: []
    })) as TreeNodeData[]
  }, [schema])

  return (
    <Col className={styles.tree}>
      <CardBox
        title='组件树'
        emptyText='暂无搭建内容'
        hasEmpty={treeNode.length === 0}
      >
        <Tree draggable treeData={treeNode} multiple />
      </CardBox>
    </Col>
  )
}

export default ComponentTree
