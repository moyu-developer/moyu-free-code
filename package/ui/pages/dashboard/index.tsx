import { Row, Col, Card, Empty } from '@douyinfe/semi-ui'
import Welcome from './components/Welcome/index'
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations'
import SearchTable from './components/SearchTable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { Dispatch, RootState } from '@/common/model'
import { useEffect } from 'react'
import { Button } from 'antd'
import styles from './index.module.sass'
import './model'
import Head from 'next/head'

export default () => {
  const dispatch: Dispatch = useDispatch()
  const isEmpty = useSelector((state: RootState) => state.myApp.tableData.total === 0, shallowEqual)

  useEffect(() => {
    dispatch.myApp.getDashViewList({ size: 40, current: 1 })
  }, [])

  return (
    <div className={styles.dashboard}>
      <Head>
        <title>仪表板 - 首页</title>
        <meta name='description' content='仪表板内容，在这里创建你的页面' />
        <link rel='icon' href='/favicon.ico' />s
      </Head>
      <Welcome />
      <div className={styles.dashboardMain}>
        <div className={styles.dashboardList}>
          {
            isEmpty
              ? (
                <div className={styles.dashboardEmpty}>
                  <Empty
                    image={<IllustrationConstruction style={{ width: 200, height: 200 }} />}
                    darkModeImage={<IllustrationConstructionDark style={{ width: 200, height: 200 }} />}
                    title='暂无可用的微页面'
                    description='快点击右上角的按钮，创建您的第一个微页面吧！'
                  />
                </div>
                )
              : <SearchTable />
         }
        </div>
      </div>
    </div>
  )
}
