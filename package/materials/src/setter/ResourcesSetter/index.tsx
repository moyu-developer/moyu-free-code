import React from 'react'
import { Input, InputNumber, InputNumberProps } from 'antd'
import cs from 'classnames'
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

const ResourcesSetter = () => {
  return (
    <div className={styles.indent}>
      <div className={styles.div1}>

        <InputNumber {...defaultInputProps} />
      </div>
      <div className={styles.div2}>

        <InputNumber {...defaultInputProps} />
      </div>
      <div className={styles.div3}>
        <InputNumber {...defaultInputProps} />
      </div>
      <div className={styles.div4}>
        <InputNumber {...defaultInputProps} />
      </div>
      <div className={styles.div5}>
        <InputNumber {...defaultInputProps} />
      </div>
      <div className={styles.div6}>
        <InputNumber {...defaultInputProps} />
      </div>

      <div className={styles.div7}>
        <InputNumber {...defaultInputProps} />
      </div>

      <div className={styles.div8}>
        <InputNumber {...defaultInputProps} />
      </div>

      <div className={styles.div9}>M</div>
      <div className={styles.div10}>P</div>
      <div className={styles.div11} />
      <div className={styles.div12} />
      <div className={styles.div13} />
      <div className={styles.div14} />
    </div>
  )
}

export default React.memo(ResourcesSetter)
