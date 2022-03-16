import * as React from 'react'
import { Button, Tabs } from '@douyinfe/semi-ui'
import styles from './index.module.sass'

export interface NavigationTabsProps {
  extra?: React.ReactNode;
  components: Array<{
    tab: React.ReactNode;
    itemKey: string;
    render: React.ReactNode;
  }>;
}

const NavigationTabs: React.FC<NavigationTabsProps> = (props) => {
  // const [selectedKey, setSelectedKey] = React.useState<React.ReactText[]>([
  //   'components'
  // ])

  return (
    <Tabs
      type='button'
      tabPosition='left'
      defaultActiveKey='MaterialBasicProduct1'
      className={styles.tabs}
      contentStyle={{ padding: 0 }}
      tabBarExtraContent={props.extra}
      renderTabBar={(tabBarProps, DefaultTabBar: any) => {
        return (
          <div className={styles.tabsBar}>
            <DefaultTabBar {...tabBarProps} />
          </div>
        )
      }}
    >
      {props.components.map((cp) => (
        <Tabs.TabPane key={cp.itemKey} tab={cp.tab} itemKey={cp.itemKey}>
          {cp.render}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default NavigationTabs
