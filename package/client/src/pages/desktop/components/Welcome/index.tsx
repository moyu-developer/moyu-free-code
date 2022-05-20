
import { Space, Button, Typography } from 'antd'
import { PageViewSettingModal, MaterialIcon } from '@moyu-code/control'
import { IconPlus } from '@tabler/icons'
import styles from './index.module.sass'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/common/model'

const Welcome = () => {
  const username = useSelector((state: RootState) => state.common.userInfo?.name)

  const dateGreet = React.useMemo(() => {
    const date = new Date()
    if (date.getHours() >= 6 && date.getHours() < 12) {
      return '上午好'
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      return '下午好'
    } else {
      return '晚上好'
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.welcome}>
        <Space className={styles.welcomeLeft} align='baseline' direction='vertical'>
          <Typography.Title level={4}>
            Hi {username}，{dateGreet}！
          </Typography.Title>

          <Typography.Text type='secondary'>
            从这里可以快速创建微页面～
          </Typography.Text>
        </Space>
        <div className={styles.welcomeRight}>
          <PageViewSettingModal>
            <Button
              type='primary'
              size='large'
              shape='round'
              icon={<MaterialIcon icon={IconPlus} />}
            >
              创建微页面
            </Button>
          </PageViewSettingModal>

        </div>
      </div>
    </div>
  )
}

export default Welcome
