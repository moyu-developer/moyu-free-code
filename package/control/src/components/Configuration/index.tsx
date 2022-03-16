import * as React from 'react'
import { Col, Form, Collapse, Button } from '@douyinfe/semi-ui'
import { useThrottleFn } from 'ahooks'
import CardBox from '../../common/components/CardBox'
import { useSelector, useDispatch } from 'react-redux'
import type { Dispatch, RootState } from 'src/common/model'
import { IconAlignTop } from '@douyinfe/semi-icons'
import styles from './index.module.sass'

const MaterialConfiguration = () => {
  const formRef = React.useRef<any>()
  const [activeKey, setActiveKey] = React.useState<string | string[]>([])

  const { schema, materials } = useSelector((state: RootState) => ({
    schema: state.common.schema,
    materials: state.common.materials
  }))
  const uid = useSelector((state: RootState) => state.common.uid)

  const dispatch: Dispatch = useDispatch()

  const currentPanels = React.useMemo(() => {
    const componentType = schema.find(
      (record) => record.uid === uid
    )?.component
    if (componentType) {
      const material = materials.find((item) => item.component === componentType)
      return material?.panel || []
    }
    return []
  }, [uid, schema, materials])

  /**
   * 属性面板修改回调
   * @param values 配置的面板属性
   */
  const { run: handleConfigurationFormChange } = useThrottleFn((formData) => {
    dispatch.common.setSchemaPropsById({
      uid,
      fieldProps: formData
    })
  })

  React.useEffect(() => {
    if (schema.length > 0) {
      const props = schema.find((node) => node.uid === uid)?.props
      formRef.current.setValues({
        props
      })
    }
  }, [uid])

  return (
    <Col className={styles.configuration}>
      <CardBox
        title='属性面板'
        emptyText='快去搭建新的页面吧'
        hasEmpty={currentPanels.length === 0}
        extra={
          activeKey.length > 0
            ? (
              <Button
                icon={<IconAlignTop />}
                onClick={() => setActiveKey([])}
                theme='borderless'
                type='primary'
              />
              )
            : null
        }
      >
        <Collapse
          keepDOM
          activeKey={activeKey}
          onChange={(keys) => setActiveKey(keys)}
        >
          <Form
            onValueChange={handleConfigurationFormChange}
            labelPosition='left'
            getFormApi={(formApi) => (formRef.current = formApi)}
          >
            {currentPanels.map((panel, i) =>
              React.createElement(panel, {
                key: i
              })
            )}
          </Form>
        </Collapse>
      </CardBox>
    </Col>
  )
}

export default MaterialConfiguration
