import { QueryViewListResponseDto } from '@/api/view/list'
import { Card, Avatar, Typography, Tag, Dropdown, Menu, Button, Space } from 'antd'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './index.module.sass'

const viewStatusOptions = [
  { value: 0, label: '未发布', color: 'red' as const },
  { value: 1, label: '已发布', color: 'green' as const }
]

const MicroCard: FC<QueryViewListResponseDto['data']['list'][0]> = (props) => {
  const router = useRouter()

  return (
    <Card className={styles.card} hoverable>
      <div
        className={styles.cardBody} onClick={() => router.push(`/example?id=${props.id}`)}
      >
        <div className={styles.cardHeader}>
          <Avatar src={props.thumbnail} size='large' shape='square'>BD</Avatar>
          <span className={styles.cardHeaderName}>{props.name}</span>
        </div>
        <div className={styles.cardText}>
          <Typography.Paragraph
            className={styles.cardTitle}
            ellipsis={{
              tooltip: true,
              rows: 2
            }}
          >
            {props.description}
          </Typography.Paragraph>
        </div>
        <div className={styles.cardFooter}>
          <Space size={1}>
            <Tag color='processing'>HTML5</Tag>
            <Tag color='processing'>微信小程序</Tag>
          </Space>
          <Dropdown
            placement='bottom'
            overlay={
              <Menu>
                <Menu.Item key='1'>删除</Menu.Item>
                <Menu.Item key='2'>取消发布</Menu.Item>
              </Menu>
            }
          >
            <Button type='text'/>
          </Dropdown>
        </div>
      </div>
    </Card>
  )
}

MicroCard.defaultProps = {
  name: '暂无标题',
  description: '这家伙很懒，什么都没留下'
}

export default MicroCard
