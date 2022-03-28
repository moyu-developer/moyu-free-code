import { useEffect, useRef, useState } from 'react'
import login, { LoginReqDto, oauthLogin } from '@/api/auth/login'
import type { Dispatch, RootState } from '@/common/model'
import { IconGithubLogo } from '@douyinfe/semi-icons'
import { Space, Form, Button, Typography } from '@douyinfe/semi-ui'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import JsCookie from 'js-cookie'
import styles from './index.module.sass'

const LoginForm = () => {
  const rememberRef = useRef<Boolean>(Boolean(JsCookie.get('remember')))
  const dispatch: Dispatch = useDispatch()
  const isLogin = useSelector((state: RootState) => state.loading.effects.common.loginEffect)
  const router = useRouter()

  const handleLoginFormSubmit = async (formData: Record<string, any>) => {
    const { remember, ...user } = formData
    JsCookie.set('remember', remember)
    const success = await dispatch.common.loginEffect(user as LoginReqDto)
    success && router.replace('/')
  }

  console.log(rememberRef.current, 'rememberRef.current')

  const handleLogin = async (code:any) => {
    const res = await oauthLogin({ source: 3, code })
    console.log(code)
  }

  useEffect(() => {
    if (router.query.code) {
      handleLogin(router.query.code)
    }
  }, [router.query])

  return (
    <div className={styles.loginForm}>
      <Form
        onValueChange={(v) => console.log(v)} onSubmit={handleLoginFormSubmit} initValues={{
          remember: rememberRef.current
        }}
      >
        <Form.Input
          field='username'
          size='large'
          label='账号'
          suffix={<Typography.Text>@moyu.dev</Typography.Text>}
          trigger='blur'
          placeholder='请输入账号名称'
          rules={[{ required: true, message: '请输入账号名称???' }]}
        />
        <Form.Input
          mode='password'
          size='large'
          field='password'
          label='密码'
          trigger='blur'
          placeholder='请输入当前密码'
          rules={[{ required: true, message: '请输入当前密码???' }]}
        />
        <div className={styles.loginFormRemember}>
          <Form.Checkbox value={false} field='remember' noLabel>
            记住我
          </Form.Checkbox>
          <Typography.Text link>找回密码?</Typography.Text>
        </div>
        <Space vertical className={styles.loginFormButtons}>
          <Button block htmlType='submit' size='large' theme='solid' type='primary' loading={isLogin}>普通登录</Button>
          <Button
            block size='large' style={{ background: '#2D3748' }} theme='solid' type='tertiary' onClick={() => {
              // 这暂时测试
              const config = {
                oauth_uri: 'https://github.com/login/oauth/authorize',
                client_id: '00b6c38e8db6913a5017',
                redirect_uri: 'http://localhost:3000/example/'
              }
              window.localStorage.preventHref = window.location.href
              window.location.href = `${config.oauth_uri}?client_id=${config.client_id}`
            }} icon={<IconGithubLogo />}
          >Github 账号登录
          </Button>
        </Space>
      </Form>
    </div>
  )
}

export default LoginForm
