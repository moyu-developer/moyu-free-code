import * as React from "react";
import { Button, Descriptions, Tag } from "antd";
import Icon from "src/common/components/AntSvg";
import { KeyboardShow, Command } from "tabler-icons-react";
import { CustomModalSetter } from "@moyu-code/materials";
import { useKeyPress } from 'ahooks'
import { useDispatch } from "react-redux";
import { Dispatch } from "src/common/model";

const keys = [
  {
    label: '保存',
    value: 'command + s'
  },

  {
    label: '预览',
    value: 'command + p'
  },

  {
    label: '撤销',
    value: 'command + z'
  },

  {
    label: '重做',
    value: 'command + shift + z'
  },

  {
    label: '复制',
    value: 'command + c'
    
  },

  {
    label: '删除组件',
    value: 'command + delete'
  },
  {
    label: '搜索',
    value: 'command + f'
  }
  
]

const KeyWordBar = () => {

  const dispatch: Dispatch = useDispatch()

  /** 保存 */
  useKeyPress(['shift.s'], () => {
    dispatch.toolbar.save(1)
  });

  /** 撤回 */
  useKeyPress(['shift.z'], () => {
    dispatch({ type: 'SCHEMA_UNDO' })
  });

  /** 前进 */
  useKeyPress(['shift.c'], () => {
    dispatch({ type: 'SCHEMA_REDO' })
  });

  return (
    <CustomModalSetter
      title="快捷键"
      footer={null}
      trigger={<Button type="link" icon={<Icon icon={KeyboardShow} />} />}
    >
     
      <Descriptions column={2}>
      {
        keys.map(data => <Descriptions.Item label={data.label}>
          <Tag color="geekblue">{data.value}</Tag>
        </Descriptions.Item>)
      }
  </Descriptions>
    </CustomModalSetter>
  );
};

export default KeyWordBar;
