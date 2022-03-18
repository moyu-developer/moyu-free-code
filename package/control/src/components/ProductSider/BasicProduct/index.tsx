import * as React from 'react'
import { Col, Input } from '@douyinfe/semi-ui'
import ProductCard from './Card'
import CardBox from '../../../common/components/CardBox'
import styles from './index.module.sass'
import { useSelector } from 'react-redux'
import type { RootState } from 'src/common/model'
import { IconSearch } from '@douyinfe/semi-icons'

const BasicProduct = () => {
  const materials = useSelector((state: RootState) => state.common.materials)

  return (
    <Col className={styles.productBasic}>
      <CardBox title='我的组件'>
        <div className={styles.search}>
          <Input suffix={<IconSearch />} showClear />
        </div>
        <div className={styles.productList}>

          {materials.map((material) => {
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
