import { history } from 'umi'
import { Avatar, Typography, Modal, Badge, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, Dispatch } from '@/common/model'
import Moment from 'moment'
import styles from './index.module.sass'

const UserProfile = () => {
  const userInfo = useSelector((state: RootState) => state.common.userInfo)
  const dispatch: Dispatch = useDispatch()

  const onSystemExit = () => {
    Modal.confirm({
      title: '退出登录？',
      content:
        '退出登录后将跳转到登录界面重新登录,此操作将会清除当前的用户信息。',
      okText: '去登录',
      okType: 'danger',
      cancelText: '取消',
      onOk () {
        dispatch.common.logout()
        history.replace('/login')
      }
    })
  }

  return (
    <div className={styles.profileWarp}>
      <Typography.Text className={styles.title} type='secondary'>
        用户信息
      </Typography.Text>
      <div className={styles.profile}>
        <Badge>
          <Avatar shape='square' size={46} src={userInfo?.avatar} />
        </Badge>

        <div className={styles.profileInfo}>
          <span className={styles.profileInfoName}>{userInfo?.name}</span>
          <span className={styles.profileInfoTime}>{Moment().format('YYYY-MM-DD')}</span>
        </div>
      </div>
      <Button size='large' type='primary' block onClick={onSystemExit}>
        退出登录
      </Button>
    </div>
  )
}

export default UserProfile
