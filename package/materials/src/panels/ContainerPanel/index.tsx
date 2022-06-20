import React from 'react'
import { Collapse, Form, InputNumber, InputNumberProps } from 'antd'
import styles from './index.module.sass'

const defaultInputProps: InputNumberProps = {
  controls: false,
  size: 'small',
  className: styles.input,
  style: {
    width: 50
  },
  placeholder: '0px',
  bordered: false,
  formatter: value => value ? `${value}px` : undefined,
  parser: value => value!.replace('px', '')
}

export const key = 'ContainerPanel'

export const render = React.memo((props) => (
  <Collapse.Panel {...props} header='边框设置' key={key}>
    <div className={styles.indent}>
      <div className={styles.div1}>
        <Form.Item noStyle name={['style', 'marginLeft']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>
      <div className={styles.div2}>
        <Form.Item noStyle name={['style', 'paddingLeft']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>
      <div className={styles.div3}>
        <Form.Item noStyle name={['style', 'paddingRight']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>
      <div className={styles.div4}>
        <Form.Item noStyle name={['style', 'marginRight']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>
      <div className={styles.div5}>

        <Form.Item noStyle name={['style', 'paddingTop']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>
      <div className={styles.div6}>

        <Form.Item noStyle name={['style', 'paddingTop']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>

      <div className={styles.div7}>

        <Form.Item noStyle name={['style', 'paddingBottom']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>

      </div>

      <div className={styles.div8}>

        <Form.Item noStyle name={['style', 'marginBottom']}>
          <InputNumber {...defaultInputProps} />
        </Form.Item>
      </div>

      <div className={styles.div9}>M</div>
      <div className={styles.div10}>P</div>
      <div className={styles.div11} />
      <div className={styles.div12} />
      <div className={styles.div13} />
      <div className={styles.div14} />
    </div>
  </Collapse.Panel>
))
