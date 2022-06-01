import * as React from 'react'
import { Form, Input, Button } from 'antd'
import { ColorSetter } from '@moyu-code/materials'
import { useSelector } from 'react-redux'
import { RootState } from 'src/common/model'

const { TextArea } = Input

const ProjectSetup = () => {
  const pageInfo = useSelector((state: RootState) => state.common.pageInfo)
  const [form] = Form.useForm<any>()

  return (
    <Form form={form} layout='vertical' initialValues={pageInfo}>
      <Form.Item
        name='name' label='页面名称' rules={[
          {
            required: true,
            message: '请输入页面名称'
          }
        ]}
      >
        <Input placeholder='请输入页面名称' />
      </Form.Item>

      <Form.Item name='description' label='页面描述'>
        <TextArea placeholder='请输入页面描述' />
      </Form.Item>
      <Form.Item name='background' label='背景颜色'>
        <ColorSetter initialColor='FFFFFF' />
      </Form.Item>

      <Form.Item>
        <Button htmlType='submit'>保存</Button>
      </Form.Item>
    </Form>
  )
}

export default React.memo(ProjectSetup)
