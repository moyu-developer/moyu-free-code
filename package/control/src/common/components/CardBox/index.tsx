import * as React from 'react'
import { Empty, Typography } from '@douyinfe/semi-ui'
import styles from './index.module.sass'
import {
  IllustrationConstruction,
  IllustrationConstructionDark
} from '@douyinfe/semi-illustrations'

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
        <Typography.Title heading={6}>{props?.title}</Typography.Title>
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
              <Empty
                image={
                  <IllustrationConstruction style={{ width: 150, height: 150 }} />
              }
                darkModeImage={
                  <IllustrationConstructionDark
                    style={{ width: 150, height: 150 }}
                  />
              }
                title='当前区域空空如也'
                description={props.emptyText}
              />
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
