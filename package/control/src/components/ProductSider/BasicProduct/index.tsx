import * as React from 'react'
import { Col, Input, Space, Tabs, Typography } from 'antd'
import ProductCard from './GridDragCard'
import { IconSearch } from '@tabler/icons'
import Icon from 'src/common/components/AntSvg'
import CardBox from 'src/common/components/CardBox'
import { useSelector } from 'react-redux'
import type { RootState } from 'src/common/model'
import RemoteComponent from '../RemoteComponent'
import PageGroups from '../PageGroups'
import styles from './index.module.sass'

const BasicProduct = () => {
  const [searchVal, setSearchVal] = React.useState('')
  const materials = useSelector((state: RootState) => state.common.materials)

  /** 搜索结果 */
  const searchResult = React.useMemo(() => {
    const result = materials.filter((item) => item.name.includes(searchVal))
    return result.length > 0 ? result : materials
  }, [searchVal, materials])

  return (
    <Col className={styles.component}>
      <CardBox title='我的组件'>
        <div className={styles.componentContent}>
          <Tabs defaultActiveKey='BaseComponents'>
            <Tabs.TabPane tab='内置组件' key='BaseComponents'>
              <div className={styles.search}>
                <Input.Search
                  prefix={<Icon icon={IconSearch} />}
                  enterButton='搜索'
                  onSearch={(v) => setSearchVal(v)}
                />
              </div>
              <Space direction='vertical' className={styles.componentWrap}>
                <Typography.Text type='secondary'>组件分类</Typography.Text>
                <div className={styles.componentList}>
                  {searchResult.map((material) => {
                    return (
                      <ProductCard
                        key={material.component.displayName}
                        schemaItem={material}
                      />
                    )
                  })}
                </div>
              </Space>
            </Tabs.TabPane>
            <Tabs.TabPane tab='远程组件' key='RemoteComponents' >
              <RemoteComponent/>
            </Tabs.TabPane>
            <Tabs.TabPane tab='我的页面' key='MicroViewList' >
              <PageGroups/>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </CardBox>
    </Col>
  )
}

export default BasicProduct
