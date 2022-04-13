import { Row, Col, Card, Empty } from '@douyinfe/semi-ui'
import Welcome from './components/Welcome/index'
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations'
import SearchTable from './components/SearchTable'
import styles from './index.module.sass'
import './model'

export default () => {
  return (
    <div className={styles.dashboard}>
      <Welcome />
      <div className={styles.dashboardMain}>
        <div className={styles.dashboardList}>
          {
           true
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
