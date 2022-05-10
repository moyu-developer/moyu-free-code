import React from 'react'
import { Collapse, Form, Input, message } from 'antd'
import { RenderNodeType } from '@moyu-code/shared'
import MultiCropsSetter from './MultiCropsSetter'

interface PictureAdsPanelProps {
  materials?: RenderNodeType
}

export const key = 'PictureAdsPanel'

export const render = React.memo((props: PictureAdsPanelProps) => {
  const { materials, ...collapseProps } = props
  const handleUrlInputSearch = (v: string) => {
    if (v) {
      window.open(v)
    } else {
      message.error('当前地址不存在，请输入完整地址后预览。')
    }
  }

  return (
    <Collapse.Panel {...collapseProps} header='组件设置' key={key}>
      <Form.Item name={['imageProps', 'src']} label='图片链接' tooltip='图片的远程地址'>
        <Input.Search placeholder='图片链接' enterButton='预览' onSearch={handleUrlInputSearch} />
      </Form.Item>

      <Form.Item noStyle shouldUpdate={(p, n) => p?.imageProps?.src !== n?.imageProps?.src}>
        {
          ({ getFieldValue }) => (
            <Form.Item name='coordinates' label='热区设置'>
              <MultiCropsSetter img={getFieldValue(['imageProps', 'src'])} uid={'PictureAds' + materials?.uid} />
            </Form.Item>
          )
        }
      </Form.Item>
    </Collapse.Panel>
  )
})
