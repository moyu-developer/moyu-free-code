import { useParams } from 'umi'
import { useEffect, useRef } from 'react'
import { LoginReqDto, oauthLogin } from '@/api/auth/login'
import type { Dispatch, RootState } from '@/common/model'
import { Space, Button, Typography, Form, Input, Checkbox } from 'antd'
import { BrandGithub, User, Eye } from 'tabler-icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcon } from '@moyu-code/control'
import JsCookie from 'js-cookie'
import { oauthDev } from '@/common/config/oauth'
import styles from './index.module.sass'

const LoginForm = () => {
  const rememberRef = useRef<Boolean>(Boolean(JsCookie.get('remember')))
  const dispatch: Dispatch = useDispatch()
  const isLogin = useSelector(
    (state: RootState) => state.loading.effects.common.loginEffect
  )
  const params = useParams<{ code?: string }>()

  const handleLoginFormSubmit = async (formData: Record<string, any>) => {
    const { remember, ...user } = formData
    JsCookie.set('remember', remember)
    await dispatch.common.loginEffect(user as LoginReqDto)
  }

  const handleLogin = async (code: any) => {
    const res = await oauthLogin({ source: 2, code })
    console.log(code)
  }

  useEffect(() => {
    if (params?.code) {
      handleLogin(params?.code)
    }
  }, [params?.code])

  return (
    <div className={styles.loginForm}>
      <Form
        layout='vertical'
        onValuesChange={(v) => console.log(v)}
        onFinish={handleLoginFormSubmit}
        initialValues={{
          remember: rememberRef.current
        }}
      >
        <Form.Item
          name='username'
          label='账号'
          rules={[{ required: true, message: '请输入账号名称???' }]}
        >
          <Input
            placeholder='请输入账号名称?'
            size='large'
            prefix={<MaterialIcon icon={User} />}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[{ required: true, message: '请输入当前密码???' }]}
        >
          <Input.Password
            placeholder='请输入当前密码?'
            size='large'
            prefix={<MaterialIcon icon={Eye} />}
          />
        </Form.Item>
        <div className={styles.loginFormRemember}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Typography.Link>找回密码?</Typography.Link>
        </div>
        <Space direction='vertical' className={styles.loginFormButtons}>
          <Button
            block
            htmlType='submit'
            size='large'
            type='primary'
            loading={isLogin}
          >
            普通登录
          </Button>
          <Button
            block
            size='large'
            icon={<MaterialIcon icon={BrandGithub} />}
            onClick={() => {
              const config = oauthDev.gitee
              window.localStorage.preventHref = window.location.href
              window.location.href = `${config.oauth_uri}?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&response_type=code&&scope=user_info`
            }}
          >
            Github
          </Button>
        </Space>
      </Form>
    </div>
  )
}

export default LoginForm
