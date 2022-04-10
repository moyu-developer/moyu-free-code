import { Button, Col, Descriptions, Modal, Row, Space, Tag } from '@douyinfe/semi-ui'
import Screenshot from 'src/common/components/Screenshot'
import React, { useState } from 'react'
import styles from './index.module.sass'

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
        onCancel={onClose}
      >
        <Row gutter={30}>
          <Col span={12}>
            <Screenshot title='第一个微页面'>
              <iframe width={350} height={700} src='http://localhost:3001/' allowFullScreen />
            </Screenshot>

          </Col>
          <Col span={12}>
            <Descriptions
              align='center' data={[
                { key: '页面版本', value: <Tag color='green'>v1.0.0</Tag> },
                { key: '当前环境', value: <Tag color='blue'>browser</Tag> },
                { key: '发布状态', value: '未发布' }
              ]}
            />
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default PreviewFrameModal
