import React from 'react'
import { InputNumber } from 'antd'
import styles from './index.module.sass'

const ResourcesSetter = () => {
  return (
    <div className={styles.indent}>
      <div className={styles.div1}>
        1s
      </div>
      <div className={styles.div2}>
        <InputNumber bordered={false} placeholder='0px' style={{ width: 60 }} />
      </div>
      <div className={styles.div3}> <InputNumber bordered={false} placeholder='0px' style={{ width: 60 }} /> </div>
      <div className={styles.div4}> <InputNumber bordered={false} placeholder='0px' /> </div>
      <div className={styles.div5}> <InputNumber bordered={false} placeholder='0px' /> </div>
    </div>
  )
}

export default React.memo(ResourcesSetter)
