import {
  Button,
  Space,
  Tooltip,
  Modal,
  InputNumber,
  message,
  Input,
  Typography
} from 'antd'
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconShare,
  IconPresentationAnalytics,
  IconSend,
  IconPlus,
  IconMinus
} from '@tabler/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.sass'
import type { Dispatch, RootState } from 'src/common/model'
import PreviewFrameModal from '../PreviewFrameModal'
import AntSvg from 'src/common/components/AntSvg'

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
      onClick: () => console.log(1)
    }
  ]

  /** 处理当前Schema的发布 */
  const handleSchemaPublish = () => {
    Modal.info({
      type: 'info',
      title: '是否发布？',
      content: '是否要发布当前页面，发布页面后会立即同步并且生效，请谨慎操作。',
      onOk: async () => {
        await dispatch.toolbar.save(1)
        message.success('发布成功')
      }
    })
  }

  return (
    <div className={styles.toolbar}>
      <Space>
        <Typography.Link>返回</Typography.Link>
      </Space>
      <Space size={5}>
        {Actions.map((el) => (
          <Tooltip key={el.itemKey} title={el.tooltip}>
            <Button
              icon={<AntSvg icon={el.icon} />}
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
              icon={<AntSvg icon={IconMinus} />}
              onClick={() => dispatch.toolbar.narrow()}
            />
          </Tooltip>
          <InputNumber
            prefix='%'
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
              icon={<AntSvg icon={IconPlus} />}
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
            icon={<AntSvg icon={IconPresentationAnalytics} />}
          />
        </PreviewFrameModal>
        <Button
          type='primary'
          onClick={handleSchemaPublish}
          icon={<AntSvg icon={IconSend} />}
        >
          发布
        </Button>
      </Space>
    </div>
  )
}

export default Toolbar
