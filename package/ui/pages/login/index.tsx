import { Col, Row, Nav, Typography, Banner } from '@douyinfe/semi-ui'
import { IconHorn, IconTick } from '@douyinfe/semi-icons'
import React from 'react'
import LoginForm from './Form'
import styles from './index.module.sass'

export default function Login () {
  return (
    <div className={styles.login}>
      <Nav
        mode='horizontal'
        className={styles.loginHeader}
        header={{
          logo: <img src='https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg' />,
          text: 'Moyu Free'
        }}
      />
      <div className={styles.message}>
        <Banner
          type='info'
          icon={<IconHorn />}
          closeIcon={<IconTick />}
          description='A pre-released version is available.'
        />
      </div>

      <Row>
        <Col span={12}>
          <div className={styles.loginBody}>
            <img className={styles.loginBodyImage} src='https://www.bing.com/th?id=OHR.SquirrelNesting_EN-US9878096346_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp' />
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.loginBody}>
            <div className={styles.loginBodyWelcome}>
              <Typography.Text>欢迎您，Moyu boys and girls 😊</Typography.Text>
              <Typography.Title heading={3}>登录你的账号开始</Typography.Title>
            </div>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </div>
  )
}
