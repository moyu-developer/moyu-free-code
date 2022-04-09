import React from 'react'
import { Typography } from '@douyinfe/semi-ui'
import styles from './index.module.sass'

export interface ScreenshotProps {
  title: string;
}

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  return (
    <div className={styles.Mobile}>
      <div className={styles.MobileTitle}>
        <Typography.Title heading={6} className={styles.canvasMobileTitle}>
          {props.title}
        </Typography.Title>
      </div>
      <div className={styles.MobileContent}>{props.children}</div>
    </div>
  )
}

export default Screenshot
