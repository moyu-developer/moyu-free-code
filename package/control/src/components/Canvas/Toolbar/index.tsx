import {
  Button,
  Space,
  Modal,
  Select,
  message,
  Typography,
  Popconfirm
} from 'antd'
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconShare,
  IconPresentationAnalytics,
  IconSend,
  IconPlus,
  IconMinus,
  IconClearAll
} from '@tabler/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.sass'
import type { Dispatch, RootState } from 'src/common/model'
import PreviewFrameModal from '../PreviewFrameModal'
import Icon from 'src/common/components/AntSvg'
import { LayoutOptions } from 'src/common/constant'
import domtoimage from 'dom-to-image'
import { ulid } from 'ulid'

const Toolbar = () => {
  const scale = useSelector((state: RootState) => state.toolbar.scale)
  const pageInfo = useSelector((state: RootState) => state.common.pageInfo)
  const dispatch: Dispatch = useDispatch()

  const onSharePostedPngContext = async () => {
    const src = await domtoimage.toPng(
      document.querySelector('#__grid-layout-render__')
    )
    if (src) {
      const aLink = document.createElement('a')
      aLink.style.display = 'none'
      aLink.href = src
      aLink.download = pageInfo.name + ulid(4) + 'png'
      document.body.appendChild(aLink)
      aLink.click()
      document.body.removeChild(aLink)
      Modal.success({
        title: '分享海报',
        content: '页面内容生成完毕，赶快保存发给你的朋友吧～～'
      })
    } else {
      message.error('Posted Share Image Error...')
    }
  }

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
        <Select defaultValue='grid' options={LayoutOptions} />
      </Space>
      <Space size={5}>
        <div className={styles.toolbarGroup}>
          <Button
            type='link'
            icon={<Icon icon={IconArrowBackUp} />}
            onClick={() => dispatch({ type: 'SCHEMA_UNDO' })}
          />
          <Button
            type='link'
            icon={<Icon icon={IconArrowForwardUp} />}
            onClick={() => dispatch({ type: 'SCHEMA_REDO' })}
          />
          <Button
            type='link'
            icon={<Icon icon={IconShare} />}
            onClick={onSharePostedPngContext}
          />

          <Popconfirm
            title='是否清楚当前内容？'
            icon={<Icon icon={IconClearAll} />}
            cancelButtonProps={{ type: 'text' }}
            onConfirm={() => dispatch.schema.updated([])}
          >
            <Button
              type='link'
              icon={<Icon icon={IconClearAll} />}
            />
          </Popconfirm>
        </div>

        <div className={styles.toolbarGroup}>
          <Button
            type='link'
            disabled={scale <= 50}
            icon={<Icon icon={IconMinus} />}
            onClick={() => dispatch.toolbar.narrow()}
          />
          <Typography.Text>{scale}%</Typography.Text>
          <Button
            type='link'
            disabled={scale >= 150}
            icon={<Icon icon={IconPlus} />}
            onClick={() => dispatch.toolbar.amplify()}
          />
        </div>
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
