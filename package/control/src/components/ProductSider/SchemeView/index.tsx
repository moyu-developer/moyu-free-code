import { Col } from '@douyinfe/semi-ui'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/common/model'
import CardBox from '../../../common/components/CardBox'
import styles from './index.module.sass'

const SchemaView = () => {
  const schema = useSelector((s: RootState) => s.common.schema)

  console.log(JSON.stringify(schema, null, 2))

  return (
    <Col className={styles.schemaView}>
      <CardBox
        title='SchemaView'
        emptyText='暂无搭建内容'
        hasEmpty={schema.length === 0}
      >
        <pre className={styles.schemaViewCode}>
          {
          JSON.stringify(schema, null, 2)
        }
        </pre>
      </CardBox>
    </Col>
  )
}

export default SchemaView
