import React from 'react'
import { Collapse, Form, Input, message, Typography } from 'antd'
import { RenderNodeType } from '@moyu-code/shared'
import MultiCropsSetter from './MultiCropsSetter'
import ResourcesModal from 'src/setter/ResourcesModal'

interface PictureAdsPanelProps {
  materials?: RenderNodeType;
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
      <Form.Item
        noStyle
        shouldUpdate
        // shouldUpdate={(p, v) => p.imageProps?.src !== v.imageProps?.src}
      >
        {(form) => {
          const src = form.getFieldValue(['imageProps', 'src'])
          console.log(src ? 1 : 2, 'src')
          return (
            <Form.Item
              name={['imageProps', 'src']}
              label='图片链接'
              tooltip='图片的远程地址'
              extra={(
                <ResourcesModal
                  type='radio'
                  onChange={(val) => {
                    form.setFieldsValue({
                      imageProps: {
                        src: val?.[0]
                      }
                    })
                    form.submit()
                  }}
                >
                  <Typography.Link>选择图片</Typography.Link>
                </ResourcesModal>
                )}
            >
              <Input.Search
                placeholder='图片链接'
                enterButton='预览'
                onSearch={handleUrlInputSearch}
              />
            </Form.Item>
          )
        }}
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(p, n) => p?.imageProps?.src !== n?.imageProps?.src}
      >
        {({ getFieldValue }) => (
          <Form.Item name='coordinates' label='热区设置'>
            <MultiCropsSetter
              img={getFieldValue(['imageProps', 'src'])}
              uid={'PictureAds' + materials?.uid}
            />
          </Form.Item>
        )}
      </Form.Item>
      <Form.Item />
    </Collapse.Panel>
  )
})
