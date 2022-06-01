import * as React from 'react'
import { Result } from 'antd'
import { MoodEmpty } from 'tabler-icons-react'
import styles from './index.module.sass'

export interface CardBoxProps {
  title?: string;
  emptyText?: string;
  hasEmpty?: boolean;
  extra?: React.ReactNode,
}

const CardBox: React.FC<CardBoxProps> = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxTitle}>
        <div className={styles.boxTitleText}>{props?.title}</div>
        <div>
          {props?.extra}
        </div>
      </div>
      <div className={styles.boxContainer}>
        {props.hasEmpty === false
          ? (
              props.children
            )
          : (
            <div className={styles.boxEmpty}>
              <Result
                icon={<MoodEmpty />}
                title='当前区域空空如也'
                subTitle={props.emptyText}
              />,
            </div>
            )}
      </div>
    </div>
  )
}

CardBox.defaultProps = {
  hasEmpty: false
}

export default CardBox
