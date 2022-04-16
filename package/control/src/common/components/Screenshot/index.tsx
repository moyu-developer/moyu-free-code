import React from 'react'
import { Typography } from 'antd'
import styles from './index.module.sass'

export interface ScreenshotProps {
  title: string;
}

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  return (
    <div className={styles.Mobile}>
      <div className={styles.MobileTitle}>
        <Typography.Title level={5} className={styles.canvasMobileTitle}>
          {props.title}
        </Typography.Title>
      </div>
      <div className={styles.MobileContent}>{props.children}</div>
    </div>
  )
}

export default Screenshot
