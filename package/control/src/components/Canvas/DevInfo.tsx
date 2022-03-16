import React, { useMemo, useState } from 'react'
import { Button, Col, Descriptions, Row, Space, Tag, Modal } from '@douyinfe/semi-ui'
import { IconAlertCircle } from '@douyinfe/semi-icons'
import { useSelector } from 'react-redux'
import styles from './index.module.sass'
import { RootState } from 'src/common/model'

const data = [
  { key: '装修版本', value: <Tag color='green'>v1.0.0</Tag> },
  { key: '当前环境', value: <Tag color='blue'>browser</Tag> },
  { key: '发布状态', value: '未发布' }
]

const DevInfo = () => {
  const uid = useSelector((state: RootState) => state.common.uid)

  const [visible, setVisible] = useState(false)

  const onClickOpenDevInfoModal = () => {
    setVisible(true)
  }

  const onClickCloseDevInfoModal = () => {
    setVisible(false)
  }

  const descs = useMemo(() => {
    if (uid) {
      return [{ key: '组件编号', value: uid }, ...data]
    }
    return data
  }, [uid])

  return (
    <div className={styles.canvasDev}>
      <Space>
        <Button icon={<IconAlertCircle />} onClick={onClickOpenDevInfoModal} />
      </Space>
      <Modal
        visible={visible}
        onCancel={onClickCloseDevInfoModal}
        title='开发面板'
        hasCancel={false}
        onOk={() => setVisible(false)}
        okText='知道了'
      >
        <Row>
          <Col>
            <Descriptions align='center' data={descs} />
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default DevInfo
