import { Empty, Form, Toast, Typography, Space, Button } from "@douyinfe/semi-ui";
import styles from "./index.module.sass";
import * as Configuration from '@moyu-code/configuration'

import type { BaseFormProps } from '@douyinfe/semi-ui/form/interface'

export default () => {

  const onTriggerPanelChangeValue: BaseFormProps['onValueChange'] = (values) => { 
    Toast.success('修改属性触发' + JSON.stringify(values))
  }

  return (
    <div className={styles["configuration"]}>
      <Space>
        <Button theme='borderless' type='primary'>主要</Button>
      </Space>
      <Configuration.FormPanel onValueChange={onTriggerPanelChangeValue}>
        <Configuration.StylePanel/>
        <Configuration.Form.Input field="fontTest" name="value" />
      </Configuration.FormPanel>
      
      <Empty
        title="当前组件未配置面板1"
        description={
          <span>
            <Typography.Text>查看当前 </Typography.Text>
            <Typography.Text link>配置文件</Typography.Text>
          </span>
        }
      />
    </div>
  );
};
