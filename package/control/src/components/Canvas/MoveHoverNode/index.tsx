import { Button, Popover, Space, message, Tooltip } from 'antd'
import { IconCopy, IconTrash, IconArrowNarrowUp, IconArrowNarrowDown } from '@tabler/icons'
import { Eye } from 'tabler-icons-react'
import * as React from 'react'
import styles from './index.module.sass'
import { RootState } from 'src/common/model'
import Icon from 'src/common/components/AntSvg'

export enum HoverNodeAction {
  'MOVE_UP' = 0,
  'MOVE_DOWN' = 1,
  'COPY' = 2,
  'DELETE' = 3,
}

export interface MoveHoverNodeProps {
  name?: string;
  uid: RootState['common']['uid'];
  schema: RootState['common']['schema'];
  onTrigger?: (type: HoverNodeAction) => Promise<boolean>;
}

const MoveHoverNode = (props: MoveHoverNodeProps) => {
  /**
   * 选中的组件配置
   * @param type 操作类型
   */
  const handleSelectedSchemaTrigger = async (type: HoverNodeAction) => {
    if (!props.onTrigger) { throw new Error('Warning: props.onTrigger is not found...') }

    const success = await props.onTrigger(type)
    if (success) {
      message.success('操作成功')
    } else {
      message.success('操作失败')
    }
  }

  /** 当前位置是否是开始 */
  const isStart = React.useMemo(() => {
    if (props?.uid) {
      return props?.uid === props.schema?.[0].uid
    }
    return true
  }, [props?.uid, props.schema])

  /** 当前位置是否是结束 */
  const isEnd = React.useMemo(() => {
    if (props?.uid) {
      return props?.uid === props.schema?.[props.schema.length - 1].uid
    }
    return true
  }, [props?.uid, props.schema])

  if (!props?.uid) {
    return null
  }

  return (
    <div className={styles.hover}>
      <Popover
        visible
        autoAdjustOverflow
        placement='right'
        trigger='custom'
        zIndex={100}
        content={
          <Space direction='vertical' size={0}>
            <Tooltip
              title={isStart ? '当前元素已在首位' : '上移'}
              placement='right'
            >
              <Button
                type='link'
                icon={<Icon icon={IconArrowNarrowUp} />}
                disabled={isStart}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.MOVE_UP)}
              />
            </Tooltip>
            <Tooltip
              title={isEnd ? '当前元素已在末尾' : '下移'}
              placement='right'
            >
              <Button
                type='link'
                icon={<Icon icon={IconArrowNarrowDown} />}
                disabled={isEnd}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.MOVE_DOWN)}
              />
            </Tooltip>
            <Tooltip title='复制' placement='right'>
              <Button
                type='link'
                icon={<Icon icon={IconCopy} />}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.COPY)}
              />
            </Tooltip>
            <Tooltip title='显示 / 隐藏' placement='right'>
              <Button
                type='link'
                icon={<Icon icon={Eye} />}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.COPY)}
              />
            </Tooltip>
            <Tooltip title='删除' placement='right'>
              <Button
                type='link'
                icon={<Icon icon={IconTrash} />}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.DELETE)}
              />
            </Tooltip>
          </Space>
        }
      />
    </div>
  )
}

export default React.memo(MoveHoverNode)
