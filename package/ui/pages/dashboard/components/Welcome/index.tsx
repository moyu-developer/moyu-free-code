import { IconPlusCircle } from '@douyinfe/semi-icons'
import { Space, Button, Row, Col, Typography } from '@douyinfe/semi-ui'
import styles from './index.module.sass'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Space className={styles.welcomeLeft} align='baseline'>
        <Typography.Title heading={4} style={{ margin: '8px 0' }}>
          Hi Wangly19，晚上好！
        </Typography.Title>

        <Typography.Text type='quaternary'>
          您可以从这里开始创建群应用～
        </Typography.Text>
      </Space>
      <div className={styles.welcomeRight}>
        {' '}
        <Button
          theme='solid'
          type='primary'
          icon={<IconPlusCircle />}
        >
          创建微页面
        </Button>
      </div>
    </div>
  )
}

export default Welcome
