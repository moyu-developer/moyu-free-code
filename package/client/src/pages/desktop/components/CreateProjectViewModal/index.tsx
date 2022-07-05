import { history } from 'umi'
import { Space, Modal, Form, Row, Col, Input, Upload, message, Badge, Tabs, Tree, TreeProps, Button } from 'antd'
import type { DataNode } from 'antd/lib/tree';
import { saveViewSchemaService } from '@moyu-code/shared'
import * as React from 'react'
import { isSuccess } from '@moyu-code/request'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
];

const renderBadge = (count: number, active = false) => {
  return (
    <Badge
      count={count}
      style={{
        marginTop: -2,
        marginLeft: 4,
        color: active ? '#1890FF' : '#999',
        backgroundColor: active ? '#E6F7FF' : '#eee',
      }}
    />
  );
};


const CreateProjectViewModal: React.FC<{}> = (props) => {
  const [activeKey, setActiveKey] = React.useState<React.Key | undefined>('tab1');
  const [visible, setVisible] = React.useState(false)
  const [form] = Form.useForm()

  const onStartModal = () => {
    setVisible(true)
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const onFinish = async () => {
    const hide = message.loading({
      content: '页面创建中'
    }, 0)
    const formData: any = await form.validateFields()
    const linkUrl = formData?.thumbnail?.[0]?.response?.data?.linkUrl

    const { code, data, message: errorMessage } = await saveViewSchemaService({
      ...formData,
      thumbnail: linkUrl,
      schema: '',
      env: 0,
      status: 1
    })
    hide()
    if (isSuccess(code)) {
      message.success('页面创建成功，将进入编辑页面')
      history.push({
        pathname: '/example',
        query: {
          id: String(data)
        }
      })
    } else {
      message.error(`页面创建失败，原因是：${errorMessage}`)
    }
  }

  return (
    <Space>
      <div onClick={onStartModal}>{props.children}</div>
      <Modal
        title='创建页面'
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onFinish}
        width={720}
      >
        <Row gutter={50}>
          <Col span={8}>
            <Button block type='primary' disabled>使用此模版</Button>
            <Tabs defaultActiveKey="template">
              <Tabs.TabPane tab="模板中心" key="template">
              <Tree
      showLine
      defaultExpandedKeys={['0-0-0']}
      treeData={treeData}
    />
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={16}>
          <Form form={form} layout='vertical' onValuesChange={(v) => console.log(v, 'v')}>
          <Form.Item
            name='name'
            label='请页面名称'
            rules={[{ required: true, message: '请输入页面名称？' }]}
          >
            <Input max={10} placeholder='请输入页面名称？' />
          </Form.Item>

          <Form.Item
            name='description'
            label='页面描述'
          >
            <Input.TextArea
              rows={3}
              maxLength={100}
              placeholder='请输入页面描述？'
            />
          </Form.Item>
          <Form.Item label='页面图片' name='thumbnail' valuePropName='fileList' getValueFromEvent={normFile}>
            <Upload.Dragger name='file' action='http://localhost:8500/api/v1/upload/image' maxCount={1}>
              <p className='ant-upload-text'>单击或拖动文件到此区域以上载</p>
              <p className='ant-upload-hint'>仅限上传单张图片用于页面显示图</p>
            </Upload.Dragger>
          </Form.Item>
        </Form></Col>
        </Row>
      </Modal>
    </Space>
  )
}

export default React.memo(CreateProjectViewModal)
