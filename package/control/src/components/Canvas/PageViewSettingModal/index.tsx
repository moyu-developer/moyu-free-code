import * as React from 'react'
import { Button, Col, Form, Input, Modal, Row, Space, Image } from 'antd'
import { useState } from 'react'
import styles from './index.module.sass'

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
        okText='保存'
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Form>
          <Row>
            <Col span={16}>
              <Row gutter={[40, 0]}>
                <Col span={12}>
                  <Form.Item name='name' label='名称'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item name='name' label='背景'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name='name' label='环境'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item name='name' label='状态'>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name='description' label='页面描述'>
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <div className={styles.icon}>
                <span className={styles.iconText}>页面图标</span>
                <Image
                  width={80}
                  src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                />
                <Button>更改icon</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

export default PageViewSettingModal
