import type { RootState, Dispatch } from '@/common/model'
import { IconGithubLogo, IconMoon, IconExit } from '@douyinfe/semi-icons'
import { Space, Button, Dropdown, Avatar } from '@douyinfe/semi-ui'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

const AvatarBar = () => {
  const userInfo = useSelector((state: RootState) => state.common.userInfo)
  const dispatch: Dispatch = useDispatch()
  const router = useRouter()

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
    router.replace('/login')
  }

  return (
    <Space spacing={6}>
      <Space spacing={0}>
        <Link href='https://github.com/moyu-developer'>
          <Button
            type='tertiary'
            theme='borderless'
            icon={<IconGithubLogo size='extra-large' />}
          />
        </Link>
        <Button
          type='tertiary'
          theme='borderless'
          icon={
            <IconMoon
              size='extra-large'
              onClick={onSetLayoutShowMode}
            />
        }
        />
      </Space>
      <Dropdown
        trigger='click'
        position='bottomLeft'
        render={
          <Dropdown.Menu>
            <Dropdown.Item
              icon={
                <IconExit />
            }
              onClick={onSystemExit}
            >
              退出登录
            </Dropdown.Item>
          </Dropdown.Menu>
      }
      >
        <Avatar src={userInfo?.avatar} size='small' />
      </Dropdown>
    </Space>
  )
}

export default AvatarBar
