import { history, NavLink } from 'umi'
import type { RootState, Dispatch } from '@/common/model'
import { IconBrandGithub, IconSun, IconBug } from '@tabler/icons'
import { Dropdown, Menu, Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.sass'

const AvatarBar = () => {
  const userInfo = useSelector((state: RootState) => state.common.userInfo)
  const dispatch: Dispatch = useDispatch()

  /**
   * 切换当前页面颜色
   */
  const onSetLayoutShowMode = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
    } else {
      body.setAttribute('theme-mode', 'dark')
    }
  }

  const onSystemExit = () => {
    dispatch.common.logout()
    history.replace('/login')
  }

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarIcon}>
        <IconBug className={styles.avatarIconLarge} />
      </div>
      <div className={styles.avatarIcon}>
        <IconSun className={styles.avatarIconLarge} />
      </div>
      <div className={styles.avatarIcon}>
        <NavLink to='https://github.com/moyu-developer'>
          <IconBrandGithub className={styles.avatarIconLarge} />
        </NavLink>
      </div>

      <Dropdown
        overlay={
          <Menu onClick={onSystemExit}>
            <Menu.Item>退出登录</Menu.Item>
          </Menu>
        }
        placement='bottom'
        arrow
      >
        <div className={styles.avatarSrc}>
          <Avatar src={userInfo?.avatar} size={34} />
        </div>
      </Dropdown>
    </div>
  )
}

export default AvatarBar
