import * as React from 'react'
import { Link } from 'umi'
import { Image, Space, Typography, Dropdown, Menu, Badge, BadgeProps } from 'antd'
import { QueryViewListResponseDto } from '@/api/view/list'
import styles from './index.module.sass'
import { useDispatch } from 'react-redux'
import { Dispatch } from '@/common/model'

const statusType: Record<number, {text: string; status: BadgeProps['status']}> = {
  0: {
    text: '已保存',
    status: 'processing'
  },
  1: {
    text: '已发布',
    status: 'success'
  }
}

const ProjectCard: React.FC<QueryViewListResponseDto['data']['list'][0]> = (
  props
) => {
  const dispatch: Dispatch = useDispatch()

  const menu = (
    <Menu
      items={[
        {
          key: 'delete',
          label: <Typography.Text type='danger'>删除页面</Typography.Text>,
          onClick: () => dispatch.myApp.deleteDashViewById(props.id)
        }
      ]}
    />
  )

  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <Link
        to={{
          pathname: '/example',
          query: {
            id: props.id
          }
        }}
      >
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
                <Space>
                  <Badge size='small' status={statusType[props.status]?.status} text={statusType[props.status]?.text} />
                  <span>{props.name}</span>
                </Space>
              </Typography.Text>
              <Typography.Paragraph type='secondary' className={styles.cardUserDesc} ellipsis={{ rows: 2 }}>
                {props.description || '这家伙很懒，什么东西都没有留下 🎉'}
              </Typography.Paragraph>
            </Space>
          </div>
        </div>
      </Link>
    </Dropdown>
  )
}

export default React.memo(ProjectCard)
