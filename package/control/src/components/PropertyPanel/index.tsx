import * as React from 'react'
import { Col, Form, Collapse, Button } from 'antd'
import { useThrottleFn } from 'ahooks'
import { useSelector, useDispatch } from 'react-redux'
import type { Dispatch, RootState } from 'src/common/model'
import { IconChevronUp } from '@tabler/icons'
import styles from './index.module.sass'
import CardBox from 'src/common/components/CardBox'
import Icon from 'src/common/components/AntSvg'

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

  console.log(schema, 'schema', materials)

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
  }, [uid, schema, materials])

  /**
   * 属性面板修改回调
   * @param values 配置的面板属性
   */
  const { run: handleConfigurationFormChange } = useThrottleFn((formData) => {
    dispatch.schema.setProps({ uid, props: formData || {} })
  })

  React.useEffect(() => {
    if (schema.length > 0) {
      const props = schema.find((node) => node.uid === uid)?.props
      console.log(props, 'props')
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
              <Button
                icon={<Icon icon={IconChevronUp} />}
                onClick={() => setActiveKey([])}
                type='primary'
              />
              )
            : null
        }
      >
        <Form form={form} onValuesChange={handleConfigurationFormChange}>
          <Collapse defaultActiveKey={['1']} ghost expandIconPosition='right'>
            {currentPanels.map((panel) => {
              return panel.render
            })}
          </Collapse>
        </Form>
      </CardBox>
    </Col>
  )
}

export default PropertyPanel
