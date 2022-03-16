import { Button, Popover, Space, Toast, Tooltip } from '@douyinfe/semi-ui'
import {
  IconArrowDown,
  IconArrowUp,
  IconCopy,
  IconDelete
} from '@douyinfe/semi-icons'
import * as React from 'react'
import {} from './'
import styles from './index.module.sass'
import { RootState } from 'src/common/model'

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
      Toast.success('操作成功')
    } else {
      Toast.success('操作失败')
    }
  }

  /** 当前位置是否是开始 */
  const isStart = React.useMemo(() => {
    return props.uid === props.schema?.[0].uid
  }, [props.uid, props.schema])

  /** 当前位置是否是结束 */
  const isEnd = React.useMemo(() => {
    return props.uid === props.schema[props.schema.length - 1].uid
  }, [props.uid, props.schema])

  return (
    <div className={styles.hover}>
      <Popover
        position='right'
        trigger='custom'
        visible
        spacing={15}
        content={
          <Space vertical spacing={0}>
            <Tooltip
              content={isStart ? '当前元素已在首位' : '上移'}
              position='right'
            >
              <Button
                icon={<IconArrowUp />}
                disabled={isStart}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.MOVE_UP)}
              />
            </Tooltip>
            <Tooltip
              content={isEnd ? '当前元素已在末尾' : '下移'}
              position='right'
            >
              <Button
                icon={<IconArrowDown />}
                disabled={isEnd}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.MOVE_DOWN)}
              />
            </Tooltip>
            <Tooltip content='复制' position='right'>
              <Button
                icon={<IconCopy />}
                onClick={() =>
                  handleSelectedSchemaTrigger(HoverNodeAction.COPY)}
              />
            </Tooltip>
            <Tooltip content='删除' position='right'>
              <Button
                icon={<IconDelete />}
                theme='light'
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
