import * as React from "react";
import {
  Collapse,
  Form,
  Input,
  Space,
  Row,
  Col,
  Select,
  Button,
  Typography,
} from "antd";
import { CodePlus, X } from "tabler-icons-react";

const RequestOptions = ["POST", "GET", "DELETE", "PUT"].map((v) => ({
  label: v,
  value: v,
}));

export const key = "RequestPanel";

export const render = React.memo((props) => (
  <Collapse.Panel {...props} header="接口设置" key={key}>
    <Row gutter={[10, 0]}>
      <Col span={8}>
        <Form.Item name={["__request", "method"]} label="请求方式">
          <Select options={RequestOptions} placeholder="请求方式" />
        </Form.Item>
      </Col>

      <Col span={16}>
        <Form.Item name="请求地址" label="请求地址">
          <Input placeholder="请求地址" />
        </Form.Item>
      </Col>
    </Row>

    <Form.List
      name={["request", "payload"]}
      initialValue={[{ key: 1, value: 1 }]}
    >
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index, array) => (
            <Row key={field.key} gutter={[20, 0]}>
              <Col span={10}>
                <Form.Item name={[field.name, "key"]}>
                  <Input placeholder={`参数${index}`} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item name={[field.name, "value"]}>
                  <Input placeholder={`值${index}, bind参数`} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Button
                  type="primary"
                  icon={
                    <span
                      className="anticon anticon-copy"
                      onClick={() => remove(field.name)}
                    >
                      <X />
                    </span>
                  }
                ></Button>
              </Col>
            </Row>
          ))}
          <Button
            block
            type="primary"
            onClick={() =>
              add({
                key: `params${fields.length + 1}`,
                value: `value${fields.length + 1}`,
              })
            }
          >
            添加参数
          </Button>
        </>
      )}
    </Form.List>
  </Collapse.Panel>
));
