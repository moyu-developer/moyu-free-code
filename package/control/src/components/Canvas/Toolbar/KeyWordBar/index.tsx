import * as React from "react";
import { Button, Descriptions, Tag } from "antd";
import Icon from "src/common/components/AntSvg";
import { KeyboardShow, Command } from "tabler-icons-react";
import { CustomModalSetter } from "@moyu-code/materials";

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
  
]

const KeyWordBar = () => {
  return (
    <CustomModalSetter
      title="快捷键
      "
      trigger={<Button type="link" icon={<Icon icon={KeyboardShow} />} />}
    >
     
      <Descriptions column={2}>
      {
        keys.map(data => <Descriptions.Item label={data.label}>
          <Tag>
            Command
          </Tag>
          <Tag>C</Tag>
        </Descriptions.Item>)
      }
  </Descriptions>
    </CustomModalSetter>
  );
};

export default KeyWordBar;
