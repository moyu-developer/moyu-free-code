import * as React from 'react'
import { Col, Form, Modal, Row, Space } from '@douyinfe/semi-ui'
import { useState } from 'react'

const PageViewSettingModal: React.FC = (props) => {
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
        title='页面设置'
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Form>
          <Row gutter={[40, 0]}>
            <Col span={12}>
              <Form.Input
                field='name'
                label='名称（Input）'
                initValue='mikeya'
                trigger='blur'
              />
            </Col>

            <Col span={12}>
              <Form.Input
                field='name'
                label='背景'
                initValue='mikeya'
                trigger='blur'
              />
            </Col>
            <Col span={12}>
              <Form.Input
                field='name'
                label='环境'
                initValue='mikeya'
                trigger='blur'
              />
            </Col>

            <Col span={12}>
              <Form.Input
                field='name'
                label='背景'
                initValue='mikeya'
                trigger='blur'
              />
            </Col>
            <Col span={24}>
              <Form.TextArea
                style={{ height: 120 }}
                field='description'
                label='页面描述'
                placeholder='对页面做一个备注吧，如果有的话！'
              />
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

export default PageViewSettingModal
