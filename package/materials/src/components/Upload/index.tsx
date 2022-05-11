import React from 'react'

import { Upload, UploadProps } from 'antd'
import { CustomSetterFormItemProps } from 'src/types/setter'

interface UploadFieldProps extends CustomSetterFormItemProps {
  serviceUrl: UploadProps['action'];
  headers: UploadProps['headers'];
}

const UploadField: React.FC<UploadFieldProps> = () => {
  return (
    <Upload />
  )
}

export default React.memo(UploadField)
