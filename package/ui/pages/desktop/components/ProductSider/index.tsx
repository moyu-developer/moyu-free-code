import { Col, Layout, Nav, Row } from "@douyinfe/semi-ui";
import {
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
} from "@douyinfe/semi-icons";
import Card from "./Card";

import * as SemiUI from "@douyinfe/semi-ui";

console.log(SemiUI, "SemiUI");

import styles from "./index.module.css";
import { ReactNode, useMemo } from "react";

export default () => {
  const componentList: string[] = useMemo(() => {
    if (SemiUI && typeof SemiUI === "object") {
      return Object.keys(SemiUI).map((name: string) => {
        return name;
      });
    }
    return [];
  }, [SemiUI]);

  return (
    <>
      <Layout.Sider>
        <Nav
          isCollapsed
          defaultSelectedKeys={["Home"]}
          style={{ maxWidth: 220, height: "100%" }}
          items={[
            {
              itemKey: "Home",
              text: "首页",
              icon: <IconHome size="large" />,
            },
            {
              itemKey: "Histogram",
              text: "基础数据",
              icon: <IconHistogram size="large" />,
            },
            {
              itemKey: "Live",
              text: "测试功能",
              icon: <IconLive size="large" />,
            },
            {
              itemKey: "Setting",
              text: "设置",
              icon: <IconSetting size="large" />,
            },
          ]}
          footer={{
            collapseButton: false,
          }}
        />
      </Layout.Sider>
      <div className={styles["productList"]}>
        <Row gutter={[10, 10]}>
          {componentList.map((name) => (
            <Card name={name} key={name} />
          ))}
        </Row>
      </div>
    </>
  );
};
