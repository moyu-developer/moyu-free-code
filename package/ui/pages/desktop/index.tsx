import Welcome from './components/Welcome/index'
import { Result } from 'antd'
import SearchCard from './components/SearchCard'
import TableList from './components/TableList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { Dispatch, RootState } from '@/common/model'
import SearchForm from './components/SearchForm'
import { useEffect } from 'react'
import Head from 'next/head'
import styles from './index.module.sass'
import './model'

export default () => {
  const dispatch: Dispatch = useDispatch()
  const isEmpty = useSelector(
    (state: RootState) => state.myApp.tableData.total === 0,
    shallowEqual
  )

  const mode = useSelector(
    (state: RootState) => state.myApp.mode,
    shallowEqual
  )

  const requestParams = useSelector(
    (state: RootState) => state.myApp.searchParams,
    shallowEqual
  )

  useEffect(() => {
    dispatch.myApp.getDashViewList(requestParams)
  }, [requestParams])

  return (
    <div className={styles.dashboard}>
      <Head>
        <title>仪表板 - 首页</title>
        <meta name='description' content='仪表板内容，在这里创建你的页面' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Welcome />
      <div className={styles.dashboardMain}>
        <div className={styles.dashboardList}>
          <SearchForm />
          {isEmpty
            ? (
              <div className={styles.dashboardEmpty}>
                <Result
                  title='您的工作台空空如也～'
                  subTitle='点击右上角快速创建一个页面。'
                />
              </div>
              )
            : (
              <div className={styles.dashboardContent}>
                {
                  mode === 'Card' ? <SearchCard /> : <TableList />
                }
              </div>
              )}
        </div>
      </div>
    </div>
  )
}
