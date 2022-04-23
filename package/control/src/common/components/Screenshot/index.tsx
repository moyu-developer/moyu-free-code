import React from 'react'
import { Typography } from 'antd'
import cs from 'classnames'
import { IconSmartHome, IconX } from '@tabler/icons'
import styles from './index.module.sass'

export interface ScreenshotProps {
  title: string;
  className?: string;
  style?: React.CSSProperties
  gridBackground?: boolean
  width?: number | string
  height?: number | string

}

const Screenshot: React.FC<ScreenshotProps> = (props) => {
  return (
    <div
      className={cs(styles.Mobile, props.className)} style={{
        ...props.style,
        width: props.width,
        height: props.height
      }}
    >
      <div className={styles.MobileTitle}>
        <div className={styles.MobileContentName}>
          {props.title}
        </div>
        <div className={styles.MobilePill}>
          <IconSmartHome />
          <IconX />
        </div>
      </div>
      <div className={cs(styles.MobileContent, {
        [styles.MobileGridBg]: props.gridBackground
      })}
      >{props.children}
      </div>
    </div>
  )
}

export default Screenshot
