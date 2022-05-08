import { Button, Col, Form, Row, Select, notification } from 'antd'
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons'
import { MaterialIcon } from '@moyu-code/control'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { SearchFormApplicationType, SearchFormStatus } from './constant'
import styles from './index.module.sass'
import { Dispatch, RootState } from '@/common/model'

const SearchForm = () => {
  const mode = useSelector(
    (state: RootState) => state.myApp.mode,
    shallowEqual
  )

  const dispatch: Dispatch = useDispatch()

  return (
    <Form>
      <Row>
        <Col span={3}>
          <Form.Item name='status'>
            <Select
              size='small'
              bordered={false}
              placeholder='状态'
              options={SearchFormStatus}
            />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item name='time'>
            <Select
              size='small'
              bordered={false}
              placeholder='创建时间'
              optionFilterProp='children'
            />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item name='type'>
            <Select
              mode='multiple'
              size='small'
              bordered={false}
              placeholder='应用类型'
              options={SearchFormApplicationType}
            />
          </Form.Item>
        </Col>
        <Col span={15}>
          <div className={styles.trigger}>
            <div className={styles.round}>
              <Button
                type={mode === 'Card' ? 'link' : 'text'}
                icon={<MaterialIcon icon={IconLayoutGrid} />}
                onClick={() => dispatch.myApp.onChangeMode('Card')}
              />
              <Button
                type={mode === 'Table' ? 'link' : 'text'}
                icon={<MaterialIcon icon={IconLayoutList} />}
                onClick={() => dispatch.myApp.onChangeMode('Table')}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm
