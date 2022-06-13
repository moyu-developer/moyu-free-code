import React, { ReactNode, useEffect, useState } from 'react'
import { Link } from 'umi'
import {
  ProLayout,
  SettingDrawer,
  ProSettings
} from '@ant-design/pro-components'
import { menuRoutes } from '../../../config/routes'
import { LogoUrl, GithubUrl } from '@/common/constant'
import styles from './index.module.sass'
import { Space } from 'antd'
import UserProfile from '../UserProfile'

console.log(menuRoutes, 'menuRoutes')

const LayoutContainer: React.FunctionComponent<{
  children?: ReactNode;
}> = (props) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    navTheme: 'light'
  })

  const pathname = window.location.pathname || '/desktop'

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
          pathname
        }}
        menuItemRender={(item, dom) => (
          <Link to={item.path}>
            {dom}
          </Link>
        )}
        route={{
          routes: menuRoutes
        }}
        {...settings}
        headerHeight={0}
        siderWidth={250}
      >
        <div className={styles.container}>
          {props.children}
        </div>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
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
