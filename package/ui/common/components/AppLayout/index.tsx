import {
  IconFolder,
  IconPhoneStroke,
  IconSetting
} from '@douyinfe/semi-icons'
import {
  Layout,
  Nav
} from '@douyinfe/semi-ui'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { Dispatch, RootState } from '@/common/model'
import AvatarBar from './AvatarBar'
import styles from './index.module.sass'

const { Header, Content } = Layout

const whiteHideLayoutPage = ['/login', '/404']

const AppLayout: React.FC<{}> = (props) => {
  const router = useRouter()
  const token = useSelector((state: RootState) => state.common.token)
  const userInfo = useSelector((state: RootState) => state.common.userInfo)
  const dispatch: Dispatch = useDispatch()

  useEffect(() => {
    if (token && !userInfo) {
      dispatch.common.getUserInfo()
    }
  }, [token, userInfo])

  if (token && router.route === '/login') {
    Router.router?.replace('/')
    return null
  } else if (!token && !whiteHideLayoutPage.includes(router.route)) {
    console.log('tokens')
    Router.router?.replace('/login')
    return null
  }

  if (whiteHideLayoutPage.includes(router.route)) {
    return props.children as ReactElement
  }

  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <div>
          <Nav
            mode='horizontal'
            defaultSelectedKeys={['Home']}
            header={{
              logo: (
                <img src='https://s2.loli.net/2022/03/16/f6AbT7nGh8OQt9y.png' />
              ),
              text: 'Moyu Free'
            }}
          >
            <Nav.Footer>
              <AvatarBar />
            </Nav.Footer>
          </Nav>
        </div>
      </Header>
      <Content className={styles.content}>{props.children}</Content>
    </Layout>
  )
}

export default AppLayout
