import { Popover, Col, Descriptions, Modal, Row, Button, Tag, Typography, Form } from 'antd'
import { PresentationAnalytics } from 'tabler-icons-react'
import { QRCodeSVG } from 'qrcode.react'
import React, { useState } from 'react'
import Icon from 'src/common/components/AntSvg'

function FrameContent () {
  return (
    <div style={{ width: '250px' }}>
      <Form layout='vertical'>
        <Form.Item label='页面地址'>
          <Typography.Link copyable>
            https://moyu-developer.cn/full-preview/629f6512fedca4001e32acf7/page/629f6512fedca4001e32acff
          </Typography.Link>
        </Form.Item>
        <Form.Item label='二维码'>
          <QRCodeSVG size={250} value='https://moyu-developer.cn/full-preview/629f6512fedca4001e32acf7/page/629f6512fedca4001e32acff' />
        </Form.Item>
      </Form>
    </div>
  )
}

const PreviewFrameModal: React.FC = () => {
  return (
    <Popover placement='bottom' title='分享预览' content={<FrameContent />} trigger='click'>
      <Button
        type='link'
        size='small'
        icon={<Icon icon={PresentationAnalytics} />}
      />
    </Popover>

  )
}

export default PreviewFrameModal
