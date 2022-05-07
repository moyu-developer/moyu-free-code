import React from 'react'
import { Form, Input, Select, Tag } from 'antd'

const prefixList = [
  {
    label: '地址1',
    value: 'http://localhost:8400/'
  },

  {
    label: '地址2',
    value: 'http://localhost:8400/v1/'
  },

  {
    label: '地址3',
    value: 'http://localhost:8400/v2/'
  }
]

const BaseUrlSetter: React.FC = () => {
  return (
    <Input.Group compact>
      <Form.Item noStyle name={['__request', 'prefix']} tooltip='请求的接口地址源，这里默认三个'>
        <Select style={{ width: '40%' }} options={prefixList} placeholder='请求接口源' />
      </Form.Item>

      <Form.Item noStyle name={['__request', 'url']} tooltip='请求的接口地址路径，长度限制不要太长，如有存在get参数，可以直接拼在后面'>
        <Input
          style={{ width: '60%' }}
          maxLength={400}
          placeholder='请输入接口路径的请求地址'
        />
      </Form.Item>
    </Input.Group>
  )
}

export default React.memo(BaseUrlSetter)
