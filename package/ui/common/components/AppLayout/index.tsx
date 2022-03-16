import { IconSemiLogo, IconHome, IconLive, IconSetting, IconBell, IconHelpCircle, IconBytedanceLogo } from '@douyinfe/semi-icons'
import { Layout, Nav, Breadcrumb, Button, Avatar, Skeleton } from '@douyinfe/semi-ui'
import React from 'react'

const { Header, Content } = Layout

const AppLayout: React.FC = (props) => {
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <div>
          <Nav
            mode='horizontal' defaultSelectedKeys={['Home']}
            header={{
              logo: <img src='https://s2.loli.net/2022/03/16/f6AbT7nGh8OQt9y.png' />,
              text: 'Moyu Free'
            }}
          >
            <Nav.Item itemKey='Home' text='首页' icon={<IconHome size='large' />} />
            <Nav.Item itemKey='Live' text='直播' icon={<IconLive size='large' />} />
            <Nav.Item itemKey='Setting' text='设置' icon={<IconSetting size='large' />} />
            <Nav.Footer>
              <Avatar color='orange' size='small'>
                YJ
              </Avatar>
            </Nav.Footer>
          </Nav>
        </div>
      </Header>
      <Content>
        {props.children}
      </Content>
    </Layout>

  )
}

export default AppLayout
