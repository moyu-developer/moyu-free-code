import { Row, Col, Card, Empty } from '@douyinfe/semi-ui'
import Welcome from './components/Welcome/index'
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations'
import styles from './index.module.sass'

export default () => {
  return (
    <div className={styles.dashboard}>
      <Welcome />
      <div className={styles.dashboardMain}>
        <div className={styles.dashboardList}>
          <div>
            111
          </div>
          {
           false && (
             <div className={styles.dashboardEmpty}>
               <Empty
                 image={<IllustrationConstruction style={{ width: 200, height: 200 }} />}
                 darkModeImage={<IllustrationConstructionDark style={{ width: 200, height: 200 }} />}
                 title='快速入门 - 搭建第一个群应用'
                 description='跟随宜小搭的指引，我们来一起创建一个群应用'
               />
             </div>
           )
         }
        </div>
      </div>
    </div>
  )
}
