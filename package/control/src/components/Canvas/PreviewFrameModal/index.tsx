import { Badge, Col, Descriptions, Modal, Row, Button, Tag } from 'antd'
import { IconBrandChrome } from '@tabler/icons'
import Screenshot from 'src/common/components/Screenshot'
import React, { useState } from 'react'
import Icon from 'src/common/components/AntSvg'

const PreviewFrameModal: React.FC = (props) => {
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <div onClick={() => setVisible(true)}>
        {props.children}
      </div>
      <Modal
        width={950}
        title='页面预览'
        visible={visible}
        onOk={onClose}
        zIndex={2030}
        footer={false}
        onCancel={onClose}
      >
        <Row gutter={30}>
          <Col span={12}>
            <Screenshot title='第一个微页面'>
              <iframe width={350} height={700} src='http://localhost:3001/' allowFullScreen />
            </Screenshot>

          </Col>
          <Col span={12}>
            <Descriptions title='页面信息' column={1}>
              <Descriptions.Item label='页面版本'>
                <Tag color='geekblue'>v1.0.0</Tag>
              </Descriptions.Item>
              <Descriptions.Item label='当前环境'>
                <Button icon={<Icon icon={IconBrandChrome} />} type='link' />
              </Descriptions.Item>
              <Descriptions.Item label='发布状态'>
                <Badge status='success' text='未发布' />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default PreviewFrameModal
