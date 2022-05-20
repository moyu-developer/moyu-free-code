import NavBar from '@/common/components/NavBar'
import React from 'react'
import LoginForm from './Form'
import { Alert, Typography, Col, Row } from 'antd'
import styles from './index.module.sass'
import Head from 'next/head'

export default function Login () {
  return (
    <div className={styles.login}>
      <Head>
        <title>登录你的账号</title>
        <meta name='description' content='在这里登录你的账号开始' />
        <link rel='icon' href='/favicon.ico' />s
      </Head>
      <NavBar hiddenMenu />
      <div className={styles.message}>

        <Alert message='Info Text' type='info' />
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
              <Typography.Title level={3}>登录你的账号开始</Typography.Title>
            </div>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </div>
  )
}
