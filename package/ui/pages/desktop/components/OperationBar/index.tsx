import { Nav, Button, Avatar, Layout, Space } from "@douyinfe/semi-ui";
import { IconBell, IconHelpCircle } from "@douyinfe/semi-icons";

import MicroViewInfo from "./MicroViewInfo";

const { Header } = Layout;

const OperationBar = () => {
  return (
    <Header>
      <Nav
        mode="horizontal"
        header={<MicroViewInfo />}
        footer={
          <Space spacing="tight" align="end">
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
            />
            <Button
              disabled={eval('1+1') > 1}
              theme="borderless"
              icon={<IconHelpCircle size="large" />}
            />
            <Avatar color="orange" size="small">
              YJ
            </Avatar>
          </Space>
        }
      />
    </Header>
  );
};

export default OperationBar