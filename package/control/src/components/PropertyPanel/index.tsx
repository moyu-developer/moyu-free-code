import * as React from 'react'
import { Col, Form, Collapse, Tabs, Tag } from 'antd'
import { useThrottleFn } from 'ahooks'
import { useSelector, useDispatch } from 'react-redux'
import type { Dispatch, RootState } from 'src/common/model'
import ProjectSetup from './ProjectSetup'
import Empty from 'src/common/components/Empty'
import Dependencies from './Dependencies'
import styles from './index.module.sass'

const PropertyPanel = () => {
  const [form]: any = Form.useForm()
  const [activeKey, setActiveKey] = React.useState<string | string[]>()

  const { schema, materials } = useSelector((state: RootState) => ({
    schema: (state.schema as any)?.present,
    materials: state.common.materials
  }))
  const uid = useSelector((state: RootState) => state.common.uid)

  const dispatch: Dispatch = useDispatch()

  const currentMaterials = React.useMemo(() => {
    const componentType = schema.find(
      (record) => record.uid === uid
    )?.component
    if (componentType) {
      console.log(materials, componentType)
      const material = materials.find(
        (item) => item.component.displayName === componentType
      )

      console.log(material, 'material')
      return material
    }
    return undefined
  }, [uid, materials])

  /**
   * 属性面板修改回调
   * @param values 配置的面板属性
   */
  const { run: handleConfigurationFormChange } = useThrottleFn(
    (formData) => {
      if (uid) {
        dispatch.schema.setProps({ uid, props: formData })
      }
    }
  )

  React.useEffect(() => {
    if (schema.length > 0 && uid) {
      const props = schema.find((node) => node.uid === uid)?.props
      form.setFieldsValue && form.setFieldsValue(props)
    }
  }, [uid, schema])

  return (
    <div className={styles.configuration}>
      <Tabs>
        <Tabs.TabPane key='setter' tab='属性面板'>
          <div className={styles.body}>
          {
            currentMaterials ? null : <Empty />
          }
          <Form
            form={form}
            layout='vertical'
            onValuesChange={handleConfigurationFormChange}
            onFinish={(formData) => {
              dispatch.schema.setProps({ uid, props: formData })
            }}
            labelAlign='left'
          >
            <Collapse
              ghost
              expandIconPosition='right'
              activeKey={activeKey}
              onChange={(keys) => setActiveKey(keys)}
            >
              {currentMaterials?.panel.map(({ key, render: RenderPanel }, index) => {
                return React.createElement(RenderPanel, {
                  key: index,
                  materials: { uid }
                })
              })}
            </Collapse>
          </Form>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key='project' tab='页面设置'>
          <ProjectSetup />
        </Tabs.TabPane>
        <Tabs.TabPane key='dependencies' tab='依赖关系'>
          <Dependencies />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default PropertyPanel
