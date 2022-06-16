import Welcome from './components/Welcome/index'
import { Result, Spin, Modal } from 'antd'
import SearchCard from './components/SearchCard'
import TableList from './components/TableList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { Dispatch, RootState } from '@/common/model'
import SearchForm from './components/SearchForm'
import { useEffect } from 'react'
import styles from './index.module.sass'
import './model'

export default () => {
  const loading = useSelector((state: RootState) => state.loading.effects.myApp.getDashViewList)
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
                <Spin spinning={loading}>
                  {
                  mode === 'Card' ? <SearchCard /> : <TableList />
                }
                </Spin>
              </div>
              )}
        </div>
      </div>
    </div>
  )
}
