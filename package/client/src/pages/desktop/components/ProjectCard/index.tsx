import { Image, Space, Typography } from 'antd'
import * as React from 'react'
import { QueryViewListResponseDto } from '@/api/view/list'
import { Dots } from 'tabler-icons-react'
import styles from './index.module.sass'

const ProjectCard: React.FC<QueryViewListResponseDto['data']['list'][0]> = (
  props
) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCover}>
        <Image
          preview={false}
          className={styles.cardCoverImg}
          src={props.thumbnail || 'https://image-resource.mastergo.com/58185601437634/6eeed01d-6d81-42f9-bcdb-63c89c7fa706/1651756817981.png'}
          alt={props.description}
          fallback="'https://image-resource.mastergo.com/58185601437634/6eeed01d-6d81-42f9-bcdb-63c89c7fa706/1651756817981.png'"
        />
      </div>
      <div className={styles.cardBar}>
        <Space className={styles.cardUser} direction='vertical'>
          <Typography.Text
            className={styles.cardUserName}
            ellipsis
          >
            {props.name}
          </Typography.Text>
          <Typography.Paragraph type='secondary' className={styles.cardUserDesc} ellipsis={{ rows: 2 }}>

            {props.description || '这家伙很懒，什么东西都没有留下 🎉'}
          </Typography.Paragraph>
        </Space>
        <div className={styles.cardArrow}>
          <Dots style={{ width: 24, height: 24 }} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProjectCard)
