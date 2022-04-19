import React from 'react'
import { Typography } from 'antd'
import cs from 'classnames'
import styles from './index.module.sass'

export interface ScreenshotProps {
  title: string;
  className?: string;
  style?: React.CSSProperties
  gridBackground?: boolean
}

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  return (
    <div
      className={cs(styles.Mobile, props.className, {
        [styles.MobileGridBg]: props.gridBackground
      })} style={props.style}
    >
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
