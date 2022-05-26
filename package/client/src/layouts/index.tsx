import { history } from 'umi'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import React, { ReactElement, useEffect } from 'react'
import { Dispatch, RootState } from '@/common/model'
import NavBar from '@/common/components/NavBar'
import AvatarBar from '@/common/components/AvatarBar'
import styles from './index.module.sass'

const { Content } = Layout

const whiteHideLayoutPage = ['/login', '/404']

const AppLayout: React.FC = (props) => {
  const token = useSelector((state: RootState) => state.common.token)
  const userInfo = useSelector((state: RootState) => state.common.userInfo)
  const dispatch: Dispatch = useDispatch()

  useEffect(() => {
    if (token && !userInfo) {
      dispatch.common.getUserInfo()
    }
  }, [token, userInfo])

  return (
    <>
      <NavBar footer={<AvatarBar />} />
      <Content className={styles.content}>{props.children}</Content>
    </>
  )
}

export default AppLayout
