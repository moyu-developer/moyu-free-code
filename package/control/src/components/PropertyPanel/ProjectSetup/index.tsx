import * as React from 'react'
import { Form, Input, Button } from 'antd'
import { ColorSetter } from '@moyu-code/materials'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/common/model'

const { TextArea } = Input

const ProjectSetup = () => {
  const pageInfo = useSelector((state: RootState) => state.common.pageInfo)
  const [form] = Form.useForm<RootState['common']['pageInfo']>()
  const dispatch: Dispatch = useDispatch()

  const handlePageInfoFormChange = (change) => {
    dispatch.common.setPageInfo(change)
  }

  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={pageInfo}
      onValuesChange={handlePageInfoFormChange}
    >
      <Form.Item
        name='name'
        label='页面名称'
        rules={[
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
    </Form>
  )
}

export default React.memo(ProjectSetup)
