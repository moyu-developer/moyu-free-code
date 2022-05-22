import * as React from 'react'
import { Col, Form, Collapse, Button, Typography, Input, Card } from 'antd'
import { useThrottleFn } from 'ahooks'
import { useSelector, useDispatch } from 'react-redux'
import type { Dispatch, RootState } from 'src/common/model'
import styles from './index.module.sass'
import CardBox from 'src/common/components/CardBox'

const { Panel } = Collapse

const PropertyPanel = () => {
  const [form]: any = Form.useForm()
  const [activeKey, setActiveKey] = React.useState<string | string[]>()

  const { schema, materials } = useSelector((state: RootState) => ({
    schema: (state.schema as any)?.present,
    materials: state.common.materials
  }))
  const uid = useSelector((state: RootState) => state.common.uid)

  const dispatch: Dispatch = useDispatch()

  const currentPanels = React.useMemo(() => {
    const componentType = schema.find(
      (record) => record.uid === uid
    )?.component
    if (componentType) {
      const material = materials.find(
        (item) => item.component.displayName === componentType
      )
      return material?.panel || []
    }
    return []
  }, [uid])

  /**
   * 属性面板修改回调
   * @param values 配置的面板属性
   */
  const { run: handleConfigurationFormChange } = useThrottleFn(
    (formData) => {
      dispatch.schema.setProps({ uid, props: formData })
    }
  )

  React.useEffect(() => {
    if (schema.length > 0) {
      const props = schema.find((node) => node.uid === uid)?.props
      form.setFieldsValue && form.setFieldsValue(props)
    }
  }, [uid, schema])

  return (
    <Col className={styles.configuration}>
      <CardBox
        title='属性面板'
        emptyText='快去搭建新的页面吧'
        hasEmpty={currentPanels.length === 0}
        extra={
          activeKey && activeKey.length > 0
            ? (
              <Typography.Link onClick={() => setActiveKey([])}>
                收起
              </Typography.Link>
              )
            : null
        }
      >
        <Form
          form={form}
          onValuesChange={handleConfigurationFormChange}
          onFinish={(formData) => {
            console.log(formData, 'formData')
            dispatch.schema.setProps({ uid, props: formData })
          }}
          labelAlign='left'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}
        >
          <Collapse
            ghost
            expandIconPosition='right'
            activeKey={activeKey}
            onChange={(keys) => setActiveKey(keys)}
          >
            {currentPanels.map(({ key, render: RenderPanel }) => {
              return <RenderPanel key={key} materials={{ uid }} />
            })}
          </Collapse>
        </Form>
      </CardBox>
    </Col>
  )
}

export default PropertyPanel
