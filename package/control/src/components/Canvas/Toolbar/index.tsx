import {
  Button,
  Space,
  Modal,
  message,
  Typography,
  Popconfirm
} from 'antd'
import {
  ArrowBackUp,
  ArrowForwardUp,
  Share,
  Send,
  Plus,
  Minus,
  ClearAll
} from 'tabler-icons-react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.sass'
import type { Dispatch, RootState } from 'src/common/model'
import PreviewFrameModal from '../PreviewFrameModal'
import CodeOpenEditor from '../CodeOpenEditor'
import Icon from 'src/common/components/AntSvg'
import domtoimage from 'dom-to-image'
import Device from './Device'
import KeyWordBar from './KeyWordBar'
import { ulid } from 'ulid'
import PublishModal from './PublishModal'

const Toolbar = () => {
  const scale = useSelector((state: RootState) => state.toolbar.scale)
  const pageInfo = useSelector((state: RootState) => state.common.pageInfo)
  const dispatch: Dispatch = useDispatch()

  const onSharePostedPngContext = async () => {
   try {
    dispatch.toolbar.setShare(true)
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
   } catch (error) {
    message.error('Posted Share Image Error...')
    
   } finally {
    dispatch.toolbar.setShare(false)
   }
  }

  return (
    <div className={styles.toolbar}>
      <Space>
        <Typography.Link >返回</Typography.Link>
      </Space>
      <Space size={5}>
        <div className={styles.toolbarGroup}>
          <Device />
          <KeyWordBar/>
        </div>
        <div className={styles.toolbarGroup}>
          <Button
            type='link'
            icon={<Icon icon={ArrowBackUp} />}
            onClick={() => dispatch({ type: 'SCHEMA_UNDO' })}
          />
          <Button
            type='link'
            icon={<Icon icon={ArrowForwardUp} />}
            onClick={() => dispatch({ type: 'SCHEMA_REDO' })}
          />
          <Button
            type='link'
            icon={<Icon icon={Share} />}
            onClick={onSharePostedPngContext}
          />

          <CodeOpenEditor />

          <Popconfirm
            title='是否清空当前内容？'
            cancelButtonProps={{ type: 'text' }}
            onConfirm={() => dispatch.schema.updated([])}
          >
            <Button
              type='link'
              icon={<Icon icon={ClearAll} />}
            />
          </Popconfirm>
        </div>

        <div className={styles.toolbarGroup}>
          <Button
            type='link'
            disabled={scale <= 50}
            icon={<Icon icon={Minus} />}
            onClick={() => dispatch.toolbar.narrow()}
          />
          <Typography.Text>{scale}%</Typography.Text>
          <Button
            type='link'
            disabled={scale >= 150}
            icon={<Icon icon={Plus} />}
            onClick={() => dispatch.toolbar.amplify()}
          />
        </div>
      </Space>
      <Space>
        <PreviewFrameModal />
        <PublishModal>
          <Button
            type='primary'
            // onClick={handleSchemaPublish}
            icon={<Icon icon={Send} />}
          >
            发布
          </Button>
        </PublishModal>
      </Space>
    </div>
  )
}

export default Toolbar
