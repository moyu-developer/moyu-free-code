import { Button, Input, Tabs } from 'antd'
import * as React from 'react'
import SetterModal from 'src/components/SetterModal'
import NavigationTable from './Table'

enum NavigationTab {
  MICRO_PAGE,
  ACTIVITY,
  APP_VIEW,
  CUSTOM_URL
}

console.log(NavigationTab, 'NavigationTab')

const NavigationSetter = () => {
  const [collapseKey, setCollapseKey] = React.useState<string>('micro-view')

  return (
    <SetterModal title='导航链接' trigger={(<Button type='primary'>选择地址</Button>)}>
      <Tabs defaultActiveKey='1' activeKey={collapseKey} onChange={(key) => setCollapseKey(key)}>
        <Tabs.TabPane tab='微页面' key='micro-view'>
          <NavigationTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab='营销活动页面' key='activity'>
          <NavigationTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab='内部导航地址' key='app'>
          <NavigationTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab='自定义地址' key='custom'>
          <Input />
        </Tabs.TabPane>
      </Tabs>
    </SetterModal>
  )
}

export default NavigationSetter
