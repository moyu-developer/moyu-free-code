import { Button, Input, message, Tabs } from 'antd'
import * as React from 'react'
import SetterModal from 'src/components/SetterModal'
import { CustomSetterFormItemProps } from 'src/types/setter'
import NavigationTable from './Table'

export enum NavigationTab {
  MICRO_PAGE,
  ACTIVITY,
  APP_VIEW,
  CUSTOM_URL
}

interface NavigationSetterValueType {
  type?: NavigationTab,
  url?: string,
}

const NavigationSetter: React.FC<CustomSetterFormItemProps<NavigationSetterValueType>> = (props) => {
  const [collapseKey, setCollapseKey] = React.useState<React.Key>(NavigationTab.MICRO_PAGE)
  const [selectedUrl, setSelectedUrl] = React.useState<string>('')

  const onSelectedChange = async () => {
    if (selectedUrl) {
      props.onChange && props.onChange({
        type: collapseKey as NavigationTab,
        url: selectedUrl
      })
    }
    return true
  }

  return (
    <SetterModal title='导航链接' okButtonProps={{ disabled: !!selectedUrl }} onOk={onSelectedChange} trigger={(<Button type='primary'>选择地址</Button>)}>
      <Tabs defaultActiveKey='1' activeKey={String(collapseKey)} onChange={(key) => setCollapseKey(key)}>
        <Tabs.TabPane tab='微页面' key={NavigationTab.MICRO_PAGE}>
          <NavigationTable type={NavigationTab.MICRO_PAGE} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='营销活动页面' key={NavigationTab.ACTIVITY}>
          <NavigationTable type={NavigationTab.ACTIVITY} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='内部导航地址' key={NavigationTab.APP_VIEW}>
          <NavigationTable type={NavigationTab.APP_VIEW} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='自定义地址' key={NavigationTab.CUSTOM_URL}>
          <NavigationTable type={NavigationTab.CUSTOM_URL} />
        </Tabs.TabPane>
      </Tabs>
    </SetterModal>
  )
}

export default NavigationSetter
