import {
  Button,
  Space,
  Tooltip,
  Modal,
  Dropdown,
  SplitButtonGroup,
  InputGroup,
  InputNumber,
  Toast
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
  IconMinusCircle,
  IconPlusCircle,
  IconArrowLeft,
  IconVideo
} from '@douyinfe/semi-icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.sass'
import type { Dispatch, RootState } from 'src/common/model'
import PreviewFrameModal from '../PreviewFrameModal'

const Toolbar = () => {
  const scale = useSelector((state: RootState) => state.toolbar.scale)
  const dispatch: Dispatch = useDispatch()

  const Actions = [
    {
      icon: <IconChevronLeft />,
      tooltip: '后退',
      itemKey: 'back',
      onClick: () => dispatch({ type: 'SCHEMA_UNDO' })
    },

    {
      icon: <IconChevronRight />,
      tooltip: '前进',
      itemKey: 'next',
      onClick: () => dispatch({ type: 'SCHEMA_REDO' })
    },
    {
      icon: <IconExternalOpen />,
      tooltip: '海报分享',
      itemKey: 'share',
      onClick: () => console.log(1)
    }
  ]

  /** 处理当前Schema的发布 */
  const handleSchemaPublish = () => {
    Modal.info({
      title: '是否发布？',
      content: '是否要发布当前页面，发布页面后会立即同步并且生效，请谨慎操作。',
      icon: <IconSend />,
      cancelButtonProps: { theme: 'borderless' },
      okButtonProps: {
        theme: 'solid',
        onClick: async () => {
          await dispatch.toolbar.save(1)
          Toast.success('发布成功')
        }
      }
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
            <Button
              icon={el.icon}
              theme='borderless'
              type='primary'
              onClick={() => el.onClick()}
            />
          </Tooltip>
        ))}
        <InputGroup>
          <Button
            theme='borderless'
            type='primary'
            disabled={scale === 50}
            icon={<IconMinusCircle />}
            onClick={() => dispatch.toolbar.narrow()}
          />
          <InputNumber
            value={scale}
            className={styles.toolbarZoom}
            hideButtons
            prefix='%'
            min={50}
            max={150}
            defaultValue={100}
            onNumberChange={(v) => dispatch.toolbar.setScale(Number(v))}
          />
          <Button
            theme='borderless'
            type='primary'
            disabled={scale === 150}
            icon={<IconPlusCircle />}
            onClick={() => dispatch.toolbar.amplify()}
          />
        </InputGroup>
      </Space>
      <Space>
        <PreviewFrameModal>
          <Button theme='borderless' type='primary' icon={<IconVideo />} />
        </PreviewFrameModal>
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
              {
                node: 'item',
                name: '预览',
                icon: <IconPhoneStroke />,
                onClick: () => {}
              },
              {
                node: 'item',
                name: '保存',
                icon: <IconSave />,
                onClick: () => dispatch.toolbar.save(0)
              },
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
