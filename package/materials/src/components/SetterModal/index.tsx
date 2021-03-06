import React, { useState } from 'react'
import { Modal, ModalProps } from 'antd'

export interface SetterModalProps extends Omit<ModalProps, 'visible'> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  onInitial?: () => void;
  onOk?: () => Promise<boolean | undefined>
}

const SetterModal: React.FC<SetterModalProps> = (props) => {
  const { children, onOk, onCancel, ...otherProps } = props
  const [visible, setVisible] = useState(false)

  const onTrigger = () => {
    setVisible(true)
    props.onInitial && props.onInitial()
  }

  const onDestroy: ModalProps['onCancel'] = (e) => {
    setVisible(false)
    props.onCancel && props.onCancel(e)
  }

  const onSuccess: ModalProps['onOk'] = async (e) => {
    if (props.onOk) {
      const result = await props.onOk()
      result && setVisible(false)
    } else {
      setVisible(false)
    }
  }

  return (
    <>
      <div onClick={onTrigger}>{props.trigger}</div>
      <Modal
        {...otherProps}
        visible={visible}
        title={props.title}
        onCancel={onDestroy}
        onOk={onSuccess}
        width={680}
      >
        {children}
      </Modal>
    </>
  )
}

export default React.memo(SetterModal)
