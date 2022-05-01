import React, { useState } from 'react'
import { Modal, ModalProps } from 'antd'

export interface SetterModalProps extends Omit<ModalProps, 'visible'> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

const SetterModal: React.FC<SetterModalProps> = (props) => {
  const { children, onOk, onCancel, ...otherProps } = props
  const [visible, setVisible] = useState(false)

  const onTrigger = () => {
    setVisible(true)
  }

  const onDestroy = () => {
    setVisible(false)
  }

  return (
    <>
      <div onClick={onTrigger}>{props.trigger}</div>
      <Modal
        {...otherProps}
        visible={visible}
        title={props.title}
        onCancel={onDestroy}
        zIndex={2300}
        width={680}
      >
        {children}
      </Modal>
    </>
  )
}

export default React.memo(SetterModal)
