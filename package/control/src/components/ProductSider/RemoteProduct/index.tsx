import { Col } from '@douyinfe/semi-ui'
import React from 'react'
import CardBox from '../../../common/components/CardBox'
import styles from './index.module.sass'

const RemoteComponent = () => {
  return (
    <Col className={styles.remote}>
      <CardBox
        title='组件商店'
        emptyText='暂无搭建内容'
        hasEmpty
      />
    </Col>
  )
}

export default RemoteComponent
