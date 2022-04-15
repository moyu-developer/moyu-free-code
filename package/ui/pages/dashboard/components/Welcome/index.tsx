
import { Space, Button, Typography } from 'antd'
import { PageViewSettingModal } from '@moyu-code/control'
import { PlusOutlined } from '@ant-design/icons'
import styles from './index.module.sass'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Space className={styles.welcomeLeft} align='baseline'>
        <Typography.Title level={4} style={{ margin: '8px 0' }}>
          Hi Wangly19，晚上好！
        </Typography.Title>

        <Typography.Text type='secondary'>
          从这里可以快速创建微页面～
        </Typography.Text>
      </Space>
      <div className={styles.welcomeRight}>
        <PageViewSettingModal>
          <Button
            type='primary'
            icon={<PlusOutlined />}
          >
            创建微页面
          </Button>
        </PageViewSettingModal>

      </div>
    </div>
  )
}

export default Welcome
