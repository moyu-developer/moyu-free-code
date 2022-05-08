import type { RootState, Dispatch } from '@/common/model'
import { Row, Col, Badge } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import MicroViewCard from './Card'
import styles from './index.module.sass'

const SearchTable = () => {
  const dispatch: Dispatch = useDispatch()

  const { list } = useSelector((state: RootState) => ({
    total: state.myApp.tableData.total,
    list: state.myApp.tableData.list
  }))

  return (
    <div className={styles.table}>
      <Row className={styles.tableList} gutter={[16, 16]}>
        {list.map((card) => {
          return (
            <Col span={8} key={card.id}>
              <Badge.Ribbon text='已发布'>
                <MicroViewCard {...card} />
              </Badge.Ribbon>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default SearchTable
