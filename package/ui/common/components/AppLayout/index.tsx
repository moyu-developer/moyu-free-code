import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import { Dispatch, RootState } from '@/common/model'
import NavBar from '../NavBar'
import AvatarBar from '../AvatarBar'
import styles from './index.module.sass'

const { Content } = Layout

const whiteHideLayoutPage = ['/login', '/404']

const AppLayout: React.FC = (props) => {
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
    <>
      <NavBar footer={<AvatarBar />} />
      <Content className={styles.content}>{props.children}</Content>
    </>
  )
}

export default AppLayout
