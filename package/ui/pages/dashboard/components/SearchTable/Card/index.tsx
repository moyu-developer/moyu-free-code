import { IconDelete, IconEyeOpened, IconMore } from '@douyinfe/semi-icons'
import { Card as SemiCard, Avatar, Typography, Button, Tag, Dropdown } from '@douyinfe/semi-ui'
import { FC } from 'react'
import styles from './index.module.sass'

export interface ApplicationCardProps {
  avatar?: string;
  name: string;
  description?: string;
  status?: number;
}

const Card: FC<ApplicationCardProps> = (props) => {
  return (
    <SemiCard className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <Avatar color='red' className={styles.cardAvatar} src={props.avatar}>
            BD
          </Avatar>
          <Typography.Paragraph
            className={styles.cardTitle} ellipsis={{
              showTooltip: true,
              rows: 1
            }}
          >
            {
              props.name
            }
          </Typography.Paragraph>
        </div>
        <div className={styles.cardText}>
          <Typography.Paragraph
            size='small'
            className={styles.cardTitle} ellipsis={{
              showTooltip: true,
              rows: 2
            }}
          >
            {props.description}
          </Typography.Paragraph>
        </div>
        <div className={styles.cardFooter}>
          <Tag color='red'> red tag </Tag>
          <Dropdown
            position='bottom'
            render={
              <Dropdown.Menu>
                <Dropdown.Item key={1} icon={<IconEyeOpened />}>应用设置</Dropdown.Item>
                <Dropdown.Item key={2} type='danger' icon={<IconDelete />}> 删除应用</Dropdown.Item>
                <Dropdown.Item key={3} type='danger' icon={<IconDelete />}> 删除应用</Dropdown.Item>
              </Dropdown.Menu>
                }
          >
            <Button theme='borderless' type='primary' icon={<IconMore />} />
          </Dropdown>
        </div>
      </div>
    </SemiCard>
  )
}

Card.defaultProps = {
  name: '暂无标题',
  description: '这家伙很懒，什么都没留下'

}

export default Card
