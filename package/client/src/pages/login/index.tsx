import NavBar from '@/common/components/NavBar'
import LoginForm from './Form'
import { Typography, Col, Alert, Row } from 'antd'
import styles from './index.module.sass'

const { Title, Text } = Typography

export default function Login () {
  return (
    <div className={styles.login}>
      <NavBar hiddenMenu />
      <div className={styles.message}>
        <Alert description='本系统为Demo演示，尽量避免上传非法内容和私密数据，避免发生不必要的资料泄漏。' message='Hello， 欢迎你👏 ' />
      </div>

      <Row>
        <Col span={12}>
          <div className={styles.loginBody}>
            111
            {/* <img className={styles.loginBodyImage} src='https://www.bing.com/th?id=OHR.SquirrelNesting_EN-US9878096346_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp' /> */}
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.loginBody}>
            <div className={styles.loginBodyWelcome}>
              <Text>欢迎您，Moyu boys and girls 😊</Text>
              <Title level={3}>登录你的账号开始</Title>
            </div>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </div>
  )
}
