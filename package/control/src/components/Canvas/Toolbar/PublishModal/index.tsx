import React from 'react'
import { CustomModalSetter } from '@moyu-code/materials'

const PublishModal: React.FC = (props) => {
  return (
    <CustomModalSetter title="发布管理" footer={null} trigger={props.children}>
      11
    </CustomModalSetter>
  )
}

export default PublishModal