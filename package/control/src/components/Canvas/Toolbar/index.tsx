import {
  Button,
  Space,
  Tooltip,
  Modal,
  InputNumber,
  message
} from 'antd'
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconShare,
  IconPresentationAnalytics,
  IconSend,
  IconPlus,
  IconMinus,
  IconLayoutBoardSplit,
  IconTable,
  IconTemplate
} from '@tabler/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.sass'
import type { Dispatch, RootState } from 'src/common/model'
import PreviewFrameModal from '../PreviewFrameModal'
import Icon from 'src/common/components/AntSvg'

const Toolbar = () => {
  const scale = useSelector((state: RootState) => state.toolbar.scale)
  const dispatch: Dispatch = useDispatch()

  const Actions = [
    {
      icon: IconArrowBackUp,
      tooltip: '后退',
      itemKey: 'back',
      onClick: () => dispatch({ type: 'SCHEMA_UNDO' })
    },

    {
      icon: IconArrowForwardUp,
      tooltip: '前进',
      itemKey: 'next',
      onClick: () => dispatch({ type: 'SCHEMA_REDO' })
    },
    {
      icon: IconShare,
      tooltip: '海报分享',
      itemKey: 'share',
      onClick: () => message.error('功能还没有开发～')
    }
  ]

  /** 处理当前Schema的发布 */
  const handleSchemaPublish = () => {
    Modal.confirm({
      title: '是否发布？',
      content: '是否要发布当前页面，发布页面后会立即同步并且生效，请谨慎操作。',
      onOk: async () => {
        await dispatch.toolbar.save(1)
        return true
      }
    })
  }

  return (
    <div className={styles.toolbar}>
      <Space>
        <Tooltip title='网格布局'>
          <Button type='link' icon={<Icon icon={IconLayoutBoardSplit} />} />
        </Tooltip>
        <Tooltip title='弹性布局'>
          <Button type='text' icon={<Icon icon={IconTable} />} />
        </Tooltip>
        <Tooltip title='线性布局'>
          <Button type='text' icon={<Icon icon={IconTemplate} />} />
        </Tooltip>
      </Space>
      <Space size={5}>
        {Actions.map((el) => (
          <Tooltip key={el.itemKey} title={el.tooltip}>
            <Button
              icon={<Icon icon={el.icon} />}
              type='link'
              size='small'
              onClick={() => el.onClick()}
            />
          </Tooltip>
        ))}

        <Space size={0}>
          <Tooltip title='缩小'>
            <Button
              type='link'
              disabled={scale <= 50}
              icon={<Icon icon={IconMinus} />}
              onClick={() => dispatch.toolbar.narrow()}
            />
          </Tooltip>
          <InputNumber
            prefix='%'
            bordered={false}
            style={{ width: 65 }}
            value={scale}
            controls={false}
            min={50}
            max={150}
            defaultValue={100}
            onChange={(v) => dispatch.toolbar.setScale(Number(v))}
          />

          <Tooltip title='放大'>
            <Button
              type='link'
              disabled={scale >= 150}
              icon={<Icon icon={IconPlus} />}
              onClick={() => dispatch.toolbar.amplify()}
            />
          </Tooltip>
        </Space>
      </Space>
      <Space>
        <PreviewFrameModal>
          <Button
            type='link'
            size='small'
            icon={<Icon icon={IconPresentationAnalytics} />}
          />
        </PreviewFrameModal>
        <Button
          type='primary'
          onClick={handleSchemaPublish}
          icon={<Icon icon={IconSend} />}
        >
          发布
        </Button>
      </Space>
    </div>
  )
}

export default Toolbar
