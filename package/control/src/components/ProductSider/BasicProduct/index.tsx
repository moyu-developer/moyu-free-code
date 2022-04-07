import * as React from 'react'
import { Col, Input } from '@douyinfe/semi-ui'
import ProductCard from './Card'
import CardBox from '../../../common/components/CardBox'
import styles from './index.module.sass'
import { useSelector } from 'react-redux'
import type { RootState } from 'src/common/model'
import { IconSearch } from '@douyinfe/semi-icons'

const BasicProduct = () => {
  const [searchVal, setSearchVal] = React.useState('')
  const materials = useSelector((state: RootState) => state.common.materials)

  /** 搜索结果 */
  const searchResult = React.useMemo(() => {
    const result = materials.filter(item => item.component.includes(searchVal) || item.name.includes(searchVal))
    return result.length > 0 ? result : materials
  }, [searchVal, materials])

  return (
    <Col className={styles.productBasic}>
      <CardBox title='我的组件'>
        <div className={styles.search}>
          <Input value={searchVal} suffix={<IconSearch />} showClear onChange={v => setSearchVal(v)} />
        </div>
        <div className={styles.productList}>

          {searchResult.map((material) => {
            return (
              <ProductCard key={material.component} schemaItem={material} />
            )
          })}
        </div>
      </CardBox>
    </Col>
  )
}

export default BasicProduct
