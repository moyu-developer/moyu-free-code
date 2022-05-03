import { Avatar, Card, Space, Typography } from 'antd'
import { IconPlus, IconFile } from '@tabler/icons'
import styles from './index.module.sass'

export interface NavigationCardProps {
  title?: string;
  secondary?: string
}

export default (props: NavigationCardProps) => {
  return (
    <Card style={{ width: 300 }} size='small'>
      <div className={styles.navigation}>
        <Avatar size='large' icon={<IconFile size={48} />} shape='square' />
        <Space direction='vertical' align='start' className={styles.navigationBody}>
          <Typography.Text strong>{props.title}</Typography.Text>
          <Typography.Text type='secondary'>{props.secondary}</Typography.Text>
        </Space>
        <IconPlus />
      </div>
    </Card>
  )
}
