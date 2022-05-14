import React from 'react'
import SetterModal from 'src/components/SetterModal'
import { Button, Layout, Menu } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }]
  }
]

const ResourcesModal = () => {
  return (
    <SetterModal title='资源管理' trigger={<Button>选择图片</Button>}>
      <Layout>
        <Sider>
          <Menu items={items} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </SetterModal>
  )
}

export default React.memo(ResourcesModal)
