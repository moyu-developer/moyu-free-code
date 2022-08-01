import * as React from "react";
import { Collapse, Form, Input, Radio, Row, Col, Select, Button } from "antd";
import { CodePlus } from "tabler-icons-react";
import BaseUrlSetter from "./BaseUrlSetter";

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
      {(fields, { add }) =>
        fields.map((field, index) => (
          <Row key={field.key} gutter={[20, 0]}>
            <Col span={10}>
              {console.log(fields, 'fields')}
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
                  <span className="anticon anticon-copy" onClick={add}>
                    <CodePlus />
                  </span>
                }
              ></Button>
            </Col>
          </Row>
        ))
      }
    </Form.List>
  </Collapse.Panel>
));
