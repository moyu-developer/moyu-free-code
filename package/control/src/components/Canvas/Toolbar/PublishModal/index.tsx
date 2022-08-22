import React from "react";
import { CustomModalSetter } from "@moyu-code/materials";
import {
  Col,
  Row,
  Descriptions,
  Space,
  Button,
  Modal,
  Image,
  Input,
  Typography,
  Tag,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch, RootState } from "src/common/model";
import { DeviceMode } from "src/common/constant";

const PublishModal: React.FC = (props) => {
  const pageInfo = useSelector((state: RootState) => state.common.pageInfo);
  const dispatch: Dispatch = useDispatch();

  /** 处理当前Schema的发布 */
  const handleSchemaPublish = () => {
    Modal.confirm({
      title: "是否发布？",
      content: "是否要发布当前页面，发布页面后会立即同步并且生效，请谨慎操作。",
      onOk: async () => {
        await dispatch.toolbar.save(1);
        return true;
      },
    });
  };

  return (
    <CustomModalSetter title="发布管理" footer={null} trigger={props.children}>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>预览二维码</Typography.Title>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAEoCAIAAABkZftOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEwUlEQVR4nO3dUW7bQAxAQbvo/a+cHqBALCAbPsqeOYCiWHjYH4L7/Pr6egCz/tQvAJ9IeBAQHgSEBwHhQUB4EBAeBIQHAeFBQHgQEB4EhAcB4UFAeBAQHgSEBwHhQUB4EBAeBIQHAeFBQHgQ+HvkKc/n88hzbufKcsRTP86qRYy++A858SAgPAgIDwLCg4DwICA8CAgPAsKDgPAgIDwICA8CZ2Y1r1g1anjFthnLI+8z+RU+9otf4cSDgPAgIDwICA8CwoOA8CAgPAgIDwLCg4DwICA8CMzNal4xNix3uzHCx6F3vvILT/44H/vFnXgQEB4EhAcB4UFAeBAQHgSEBwHhQUB4EBAeBIQHgV2zmm9pbD/ntjlMvuHEg4DwICA8CAgPAsKDgPAgIDwICA8CwoOA8CAgPAiY1fx1xiP5nxMPAsKDgPAgIDwICA8CwoOA8CAgPAgIDwLCg8CukTHTVT9xx1/vju98hBMPAsKDgPAgIDwICA8CwoOA8CAgPAgIDwLCg4DwIDA3q3nqRuLbOXVD8svnHHnIxedc8bFf/AonHgSEBwHhQUB4EBAeBIQHAeFBQHgQEB4EhAcB4UHg+bGLDVc5MkI5OYfJDznxICA8CAgPAsKDgPAgIDwICA8CwoOA8CAgPAgIDwK77kAfW0F5yqqXueLUy4zNfG5bBHrqbznxICA8CAgPAsKDgPAgIDwICA8CwoOA8CAgPAgIDwJnZjVXjSM+PnV75LY70PmGEw8CwoOA8CAgPAgIDwLCg4DwICA8CAgPAsKDgPAgMLdXc9UE4O3WS54yuQh07G/d8Ws68SAgPAgIDwLCg4DwICA8CAgPAsKDgPAgIDwIPG839LTKtouCX7rdrcXvujnSiQcB4UFAeBAQHgSEBwHhQUB4EBAeBIQHAeFBQHgQmFvvd2q678hzJicAx/7WHcduxwZQt818OvEgIDwICA8CwoOA8CAgPAgIDwLCg4DwICA8CAgPAvZq/rpVFwVvu2b5dv/UKU48CAgPAsKDgPAgIDwICA8CwoOA8CAgPAgIDwLCg8CZvZrblhaOuTLdt2rr46qXmbRtJtmJBwHhQUB4EBAeBIQHAeFBQHgQEB4EhAcB4UFAeBCYuwN927DcS6dGFsfWS16x6mUeg3egb+PEg4DwICA8CAgPAsKDgPAgIDwICA8CwoOA8CAgPAjMzWpesWq95KQjI5Sn5jAn5znH7kDf9o878SAgPAgIDwLCg4DwICA8CAgPAsKDgPAgIDwI7BoZe0vbxtNeWjUOdsq2vYZOPAgIDwLCg4DwICA8CAgPAsKDgPAgIDwICA8CwoOAWc1ft2pn4djLPA69z5WHnJqxtN4P3pzwICA8CAgPAsKDgPAgIDwICA8CwoOA8CAgPAjsmtVctYnxlMlJwpfuOM/50qkZS3s14c0JDwLCg4DwICA8CAgPAsKDgPAgIDwICA8CwoPA3Kzm5ATgW3o5Sbjtmu8rjuzVPMVeTXhzwoOA8CAgPAgIDwLCg4DwICA8CAgPAsKDgPAg8Nw2vAefwIkHAeFBQHgQEB4EhAcB4UFAeBAQHgSEBwHhQUB4EBAeBIQHAeFBQHgQEB4EhAcB4UFAeBAQHgSEBwHhQUB4EPgH4bwETOixdN0AAAAASUVORK5CYII=" />
        </Col>
        <Col span={12}>
          <Descriptions title={pageInfo?.name} layout="horizontal" column={1}>
            <Descriptions.Item label="页面描述">
              {pageInfo.description}
            </Descriptions.Item>
            <Descriptions.Item label="环境">
              <Tag color="purple">
                {DeviceMode.find((item) => item.value === pageInfo.env)?.label}
              </Tag>
            </Descriptions.Item>

            <Descriptions.Item>
              <Input.Search
                enterButton="打开"
                value="https://moyu-developer.cn/full-preview/629f6512fedca4001e32acf7/page/629f6512fedca4001e32acff"
                onSearch={() => window.open("https://moyu-developer.cn/full-preview/629f6512fedca4001e32acf7/page/629f6512fedca4001e32acff")}
              />
            </Descriptions.Item>
          </Descriptions>

          <Space>
            <Button type="primary" onClick={handleSchemaPublish}>
              发布页面
            </Button>
            <Button>发布为模板</Button>
          </Space>
        </Col>
      </Row>
    </CustomModalSetter>
  );
};

export default PublishModal;
