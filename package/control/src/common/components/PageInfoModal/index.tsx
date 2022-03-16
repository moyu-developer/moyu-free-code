import * as React from 'react'
import { Col, Form, Modal, Row, Space } from '@douyinfe/semi-ui'
import { useState } from 'react'

const PageInfoModal: React.FC = (props) => {
  const [visible, setVisible] = useState(false)

  const onStartModal = () => {
    setVisible(true)
  }

  return (
    <Space>
      <div onClick={onStartModal}>
        {props.children}
      </div>
      <Modal
        title='页面信息'
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Form>
          <Row>
            <Col span={12}>
              <Form.Input
                field='name'
                label='名称（Input）'
                initValue='mikeya'
                trigger='blur'
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

export default PageInfoModal
