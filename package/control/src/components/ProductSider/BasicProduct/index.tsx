import * as React from 'react'
import { Col, Input, Space, Typography } from 'antd'
import ProductCard from './GridDragCard'
import { IconSearch } from '@tabler/icons'
import Icon from 'src/common/components/AntSvg'
import CardBox from 'src/common/components/CardBox'
import styles from './index.module.sass'
import { useSelector } from 'react-redux'
import type { RootState } from 'src/common/model'

const BasicProduct = () => {
  const [searchVal, setSearchVal] = React.useState('')
  const materials = useSelector((state: RootState) => state.common.materials)

  /** 搜索结果 */
  const searchResult = React.useMemo(() => {
    const result = materials.filter(item => item.name.includes(searchVal))
    return result.length > 0 ? result : materials
  }, [searchVal, materials])

  return (
    <Col className={styles.component}>
      <CardBox title='我的组件'>
        <div className={styles.componentContent}>
          <div className={styles.search}>
            <Input value={searchVal} suffix={<Icon icon={IconSearch} />} onChange={v => setSearchVal(v.target.value)} />
          </div>
          <Space direction='vertical' className={styles.componentWrap}>
            <Typography.Text type='secondary'>组件分类</Typography.Text>
            <div className={styles.componentList}>
              {searchResult.map((material) => {
                return (
                  <ProductCard key={material.component.displayName} schemaItem={material} />
                )
              })}
            </div>
          </Space>
        </div>
      </CardBox>
    </Col>
  )
}

export default BasicProduct
