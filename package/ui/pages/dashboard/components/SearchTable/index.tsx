import type { RootState, Dispatch } from '@/common/model'
import { Input, Avatar, Row, Col, Pagination, Form } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import styles from './index.module.sass'

const list = [
  { value: 'abc', label: '抖音', otherKey: 0 },
  { value: 'hotsoon', label: '火山小视频', disabled: true, otherKey: 1 },
  { value: 'jianying', label: '剪映', otherKey: 2 },
  { value: 'toutiao', label: '今日头条', otherKey: 3 }
]

const SearchTable = () => {
  const dispatch: Dispatch = useDispatch()

  const { total, list } = useSelector((state: RootState) => ({
    total: state.myApp.tableData.total,
    list: state.myApp.tableData.list
  }))

  return (
    <div className={styles.table}>
      <div className={styles.tableTool}>
        {/* <Input suffix={<IconSearch />} className={styles.tableToolSearch} /> */}
        <Form>
          <Form.Item>
            <Input placeholder='输入页面名称' />
          </Form.Item>
        </Form>
        <div className={styles.tableToolParams} />
      </div>
      <Row className={styles.tableList} gutter={[16, 16]}>
        {
          list.map(card => {
            return (
              <Col span={6} key={card.id}>
                <Card {...card} />
              </Col>
            )
          })
        }
        <Col span={24}>
          <Pagination
            total={total}
            showSizeChanger
            showQuickJumper
            showTotal={total => `总共 ${total} 条数据`}
          />
        </Col>
      </Row>
    </div>
  )
}

export default SearchTable
