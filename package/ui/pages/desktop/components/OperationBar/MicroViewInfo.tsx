import { RootState } from "@/common/model";
import { IconRedo, IconUndo, IconSave, IconUploadError } from "@douyinfe/semi-icons";
import { Button, Space, Input, Avatar, Tooltip } from "@douyinfe/semi-ui";
import { useSelector } from "react-redux";
export default () => {

  /** @name dslView 页面结构 */
  const dslView = useSelector((state: RootState) => state.schema.dslView)

  return (
    <Space>
      <Avatar
        alt="a cat"
        src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg"
        style={{ margin: 4 }}
      />
      <Input
        value={dslView.viewName}
      />
      <Button icon={<IconUndo />} />
      <Button icon={<IconRedo />} />
      <Button icon={<IconSave />} />
    </Space>
  );
};
