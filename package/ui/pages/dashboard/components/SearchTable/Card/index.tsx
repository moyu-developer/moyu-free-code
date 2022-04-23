import { QueryViewListResponseDto } from '@/api/view/list'
import { Card, Avatar, Typography, Tag, Dropdown, Menu, Button } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './index.module.sass'

const viewStatusOptions = [
  { value: 0, label: '未发布', color: 'red' as const },
  { value: 1, label: '已发布', color: 'green' as const }
]

const MicroCard: FC<QueryViewListResponseDto['data']['list'][0]> = (props) => {
  const router = useRouter()
  const statusTag = viewStatusOptions.find((v) => v.value === props.status)

  return (
    <Card className={styles.card} hoverable>
      <div
        className={styles.cardBody} onClick={() => router.push(`/example?id=${props.id}`)}
      >
        <div className={styles.cardHeader}>
          <Avatar src={props.thumbnail}>BD</Avatar>
          <span className={styles.cardTitle}>{props.name}</span>
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
          {statusTag
            ? (
              <Tag color={statusTag.color}>{statusTag.label}</Tag>
              )
            : null}
          <Dropdown
            placement='bottom'
            overlay={
              <Menu>
                <Menu.Item key='1'>1st menu item</Menu.Item>
                <Menu.Item key='2'>2nd menu item</Menu.Item>
                <Menu.Item key='3'>3rd menu item</Menu.Item>
              </Menu>
            }
          >
            <Button type='text' icon={<EllipsisOutlined />} />
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
