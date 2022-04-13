import { IconHash } from '@douyinfe/semi-icons'
import { Space, Button, Typography } from '@douyinfe/semi-ui'
import { PageViewSettingModal } from '@moyu-code/control'
import styles from './index.module.sass'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Space className={styles.welcomeLeft} align='baseline'>
        <Typography.Title heading={4} style={{ margin: '8px 0' }}>
          Hi Wangly19，晚上好！
        </Typography.Title>

        <Typography.Text type='quaternary'>
          从这里可以快速创建微页面～
        </Typography.Text>
      </Space>
      <div className={styles.welcomeRight}>
        <PageViewSettingModal>
          <Button
            theme='solid'
            type='primary'
            icon={<IconHash />}
          >
            创建微页面
          </Button>
        </PageViewSettingModal>

      </div>
    </div>
  )
}

export default Welcome
