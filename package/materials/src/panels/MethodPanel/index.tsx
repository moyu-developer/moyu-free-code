import * as React from 'react'
import { Collapse, Form, Input, Radio, Select } from 'antd'

const RequestOptions = ['POST', 'GET', 'DELETE', 'PUT'].map(v => ({ label: v, value: v }))

export const PanelKey = 'request_panel_key'

export const RequestPanel = {
  key: PanelKey,
  render: (
    <Collapse.Panel header='接口请求' key={PanelKey}>
      {/* <Input.Group compact>
        <Form.Item name={['__request', 'baseurl']} noStyle>
          <Select>
            <Select.Option value='http://localhost:8400/'>地址1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={['__request', 'path']} noStyle>
          <Input placeholder='接口的路径名，get参数可以配置在后边' />
        </Form.Item>
      </Input.Group> */}

      <Form.Item name={['__request', 'method']} label='请求方式'>
        <Radio.Group options={RequestOptions} optionType='button' size='small' />
      </Form.Item>

      <Form.List name={['__request', 'payload']}>
        {fields =>
          fields.map(field => (
            <React.Fragment key={field.key}>
              <Form.Item name={[field.name, 'key']}>
                <Input />
              </Form.Item>
              <Form.Item name={[field.name, 'value']}>
                <Input />
              </Form.Item>
            </React.Fragment>
          ))}
      </Form.List>

    </Collapse.Panel>
  )
}
