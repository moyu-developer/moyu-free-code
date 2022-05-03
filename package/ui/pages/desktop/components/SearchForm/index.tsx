import { Button, Col, Form, Row, Select, notification } from 'antd'
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons'
import { MaterialIcon } from '@moyu-code/control'
import styles from './index.module.sass'

const SearchForm = () => {
  return (
    <Form>
      <Row>
        <Col span={3}>
          <Form.Item name='status'>
            <Select
              size='small'
              bordered={false}
              placeholder='状态'
              optionFilterProp='children'
            />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item name='status'>
            <Select
              size='small'
              bordered={false}
              placeholder='创建时间'
              optionFilterProp='children'
            />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item name='status'>
            <Select
              size='small'
              bordered={false}
              placeholder='应用类型'
              optionFilterProp='children'
            />
          </Form.Item>
        </Col>
        <Col span={15}>
          <div className={styles.trigger}>
            <div className={styles.round}>
            <Button type='link' icon={<MaterialIcon icon={IconLayoutGrid} />} />
            <Button
              type='text'
              icon={<MaterialIcon icon={IconLayoutList} />}
              onClick={() =>
                notification.warn({
                  message: '提示',
                  description: '功能正在开发中'
                })}
            />
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm
