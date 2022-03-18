import {
  Button,
  Space,
  Tooltip,
  Modal,
  Dropdown,
  SplitButtonGroup
} from '@douyinfe/semi-ui'
import {
  IconFilpVertical,
  IconChevronLeft,
  IconChevronRight,
  IconExternalOpen,
  IconSend,
  IconSave,
  IconDelete,
  IconMore,
  IconPhoneStroke,
  IconArrowLeft,
  IconMinusCircle,
  IconPlusCircle
} from '@douyinfe/semi-icons'
import React from 'react'
import styles from './index.module.sass'

const Actions = [
  {
    icon: <IconChevronLeft />,
    tooltip: '后退',
    itemKey: 'back'
  },

  {
    icon: <IconChevronRight />,
    tooltip: '前进',
    itemKey: 'next'
  },
  {
    icon: <IconPlusCircle />,
    tooltip: '放大',
    itemKey: 'max'
  },
  {
    icon: <IconMinusCircle />,
    tooltip: '缩小',
    itemKey: 'min'
  },
  {
    icon: <IconExternalOpen />,
    tooltip: '海报分享',
    itemKey: 'share'
  }
]

const Toolbar = () => {
  /** 处理当前Schema的发布 */
  const handleSchemaPublish = () => {
    Modal.info({
      title: '是否发布？',
      content: '是否要发布当前页面，发布页面后会立即同步并且生效，请谨慎操作。',
      icon: <IconSend />,
      cancelButtonProps: { theme: 'borderless' },
      okButtonProps: { theme: 'solid' }
    })
  }

  return (
    <div className={styles.toolbar}>
      <Space>
        <Button icon={<IconArrowLeft />} theme='borderless' type='primary'>
          返回
        </Button>
      </Space>
      <Space spacing={0}>
        {Actions.map((el) => (
          <Tooltip key={el.itemKey} content={el.tooltip}>
            <Button icon={el.icon} theme='borderless' type='primary' />
          </Tooltip>
        ))}
      </Space>
      <Space>
        <SplitButtonGroup aria-label='项目操作按钮组'>
          <Button
            theme='solid'
            type='primary'
            style={{ marginRight: 0 }}
            icon={<IconFilpVertical />}
            onClick={handleSchemaPublish}
          >
            发布
          </Button>
          <Dropdown
            menu={[
              { node: 'item', name: '预览', icon: <IconPhoneStroke /> },
              { node: 'item', name: '保存', icon: <IconSave /> },
              {
                node: 'item',
                name: '删除',
                type: 'danger',
                icon: <IconDelete />
              }
            ]}
            trigger='click'
            position='bottomRight'
          >
            <Button type='primary' theme='solid' icon={<IconMore />} />
          </Dropdown>
        </SplitButtonGroup>
      </Space>
    </div>
  )
}

export default Toolbar
