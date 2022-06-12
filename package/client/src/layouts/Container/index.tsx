import React, { ReactNode, useState } from 'react'
import {
  ProLayout,
  SettingDrawer,
  ProSettings
} from '@ant-design/pro-components'
import complexMenu from './pm'
import { LogoUrl, GithubUrl } from '@/common/constant'
import styles from './index.module.sass'
import { Space, Typography } from 'antd'
import UserProfile from '../UserProfile'

const LayoutContainer: React.FunctionComponent<{
  children?: ReactNode;
}> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    navTheme: 'light'
  })

  return (
    <div
      className={styles.layout}
    >
      <ProLayout
        logo={LogoUrl}
        collapsedButtonRender={false}
        menuHeaderRender={(logo) => (
          <div>
            <Space
              align='center'
              onClick={() => {
                window.open(GithubUrl)
              }}
            >
              {logo}
              <span className={styles.layoutLogo}>Moyu Free</span>
            </Space>

          </div>
        )}
        menuFooterRender={() => <UserProfile />}
        navTheme='light'
        location={{
          pathname: '/data_hui/data_hui2'
        }}
        route={{
          routes: complexMenu
        }}
        menu={{ defaultOpenAll: true }}
        {...settings}
        headerHeight={0}
      >
        <div className={styles.container}>
          {props.children}
        </div>
      </ProLayout>
      <SettingDrawer
        pathname='/'
        enableDarkTheme
        getContainer={() => document.getElementById('root')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting)
        }}
        disableUrlParams={false}
      />
    </div>
  )
}

export default React.memo(LayoutContainer)
