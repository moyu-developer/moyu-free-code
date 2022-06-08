import { Menu, MenuProps, Space, Typography } from 'antd'
import routes from './routes'

const NavMenu = () => {
  return (
    <Menu
      mode='horizontal'
      items={routes}
      style={{
        lineHeight: '60px'
      }}
    >
      {/* <Menu.Item icon={<MaterialIcon icon={IconDeviceDesktopAnalytics} />}>
        工作台
      </Menu.Item>
      <Menu.Item>模板市场</Menu.Item>
      <Menu.SubMenu title='数据源'>
        <Menu.Item>导航数据</Menu.Item>
        <Menu.Item>接口数据</Menu.Item>
        <Menu.Item>商品中心</Menu.Item>
        <Menu.Item>活动设置</Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  )
}

export default NavMenu
