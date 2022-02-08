import { Collapse, Form } from "@douyinfe/semi-ui"

import type { BaseFormProps } from '@douyinfe/semi-ui/form/interface'

const FormPanel: React.FC<BaseFormProps> = (props) => {
  return <Form {...props}>
    <Collapse>
    {
      props.children
    }
    </Collapse>
  </Form>
}

export default FormPanel