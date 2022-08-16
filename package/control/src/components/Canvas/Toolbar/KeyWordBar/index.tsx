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
    label: '保存'
  },

  {
    label: '预览'
  },

  {
    label: '撤销'
  },

  {
    label: '复制'
  },

  {
    label: '删除组件'
  },
  {
    label: '搜索'
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
          <Tag icon={<Command />}>
          </Tag>
          <Tag>C</Tag>
        </Descriptions.Item>)
      }
  </Descriptions>
    </CustomModalSetter>
  );
};

export default KeyWordBar;
