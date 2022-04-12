import { IconSearch } from '@douyinfe/semi-icons'
import { Input, Avatar, Row, Col, Select } from '@douyinfe/semi-ui'
import { useState } from 'react'
import Card from './Card'
import styles from './index.module.sass'

const list = [
  { value: 'abc', label: '抖音', otherKey: 0 },
  { value: 'hotsoon', label: '火山小视频', disabled: true, otherKey: 1 },
  { value: 'jianying', label: '剪映', otherKey: 2 },
  { value: 'toutiao', label: '今日头条', otherKey: 3 }
]

const SearchTable = () => {
  const [pageList, setPageList] = useState()
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
      width: 400,
      render: (text: string) => {
        return (
          <div>
            <Avatar size='small' shape='square' src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png' style={{ marginRight: 12 }} />
            {text}
          </div>
        )
      }
    }
  ]

  return (
    <div className={styles.table}>
      <div className={styles.tableTool}>
        <Input suffix={<IconSearch />} className={styles.tableToolSearch} />
        <div className={styles.tableToolParams} />
      </div>
      <Row className={styles.tableList} gutter={[16, 16]}>
        <Col span={6}>
          <Card />
        </Col>
        <Col span={6}>
          <Card />
        </Col>
        <Col span={6}>
          <Card />
        </Col>
        <Col span={6}>
          <Card />
        </Col>
        <Col span={6}>
          <Card />
        </Col>
        <Col span={6}>
          <Card />
        </Col>
        {/* <Table bordered={false} columns={columns} dataSource={[]} /> */}
      </Row>
    </div>
  )
}

export default SearchTable
