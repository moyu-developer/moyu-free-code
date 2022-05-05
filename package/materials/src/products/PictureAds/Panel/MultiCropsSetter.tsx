import { Button } from 'antd'
import React from 'react'
import MultiCrops, { CropsProps } from 'react-multi-crops'
import SetterModal from 'src/components/SetterModal'
import type { CustomSetterFormItemProps } from 'src/types/global'

interface MultiCropSetterProps
  extends CustomSetterFormItemProps<CropsProps['coordinates']> {
  img?: string;
}

const MultiCropSetter = (props: MultiCropSetterProps) => {
  const handleChangeCrop: CropsProps['onChange'] = (_, __, coordinates) => {
    console.log(coordinates, 'coordinates')
    props.onChange(coordinates)
  }

  const handleDeleteCrop: CropsProps['onDelete'] = (_, __, coordinates) => {
    props.onChange(coordinates)
  }

  return (
    <SetterModal
      title='选择热区'
      trigger={<Button type={props.value?.length ? 'link' : 'primary'}>{props.value?.length ? `已选中${props.value?.length}个区域` : '匡选热区'}</Button>}
    >
      <MultiCrops
        src='https://img.yzcdn.cn/vant/cat.jpeg'
        width={250}
        coordinates={props.value}
        onChange={handleChangeCrop}
        onDelete={handleDeleteCrop}
      />
    </SetterModal>
  )
}

export default React.memo(MultiCropSetter)
