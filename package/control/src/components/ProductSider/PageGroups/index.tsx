import React from 'react'
import Empty from 'src/common/components/Empty'
import styles from './index.module.sass'

const PageGroups = () => {
  return (
    <div className={styles.page}>
      <Empty/>
    </div>
  )
}

export default React.memo(PageGroups)
