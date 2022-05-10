import { Button, Descriptions, message, Space, Tabs, Typography } from 'antd'
import React, { useState } from 'react'
import MultiCrops, { CropsProps } from 'react-multi-crops'
import SetterModal from 'src/components/SetterModal'
import { CustomSetterFormItemProps } from 'src/types/setter'

interface MultiCropSetterProps
  extends CustomSetterFormItemProps<CropsProps['coordinates']> {
  img?: string;
  uid: string
}

const MultiCropSetter = (props: MultiCropSetterProps) => {
  const [resize, setImageContextResize] = useState<{
    height?: number
    width?: number

  }>()

  const [coordinates, setCoordinates] = useState<CropsProps['coordinates']>([])

  const [coordinateKey, setCoordinateKey] = useState<string>()

  const onInitialImageSize = () => {
    const adsElement = document.getElementById(props.uid)
    setImageContextResize({
      height: adsElement?.clientHeight,
      width: adsElement?.clientWidth
    })
    if (props.value) {
      setCoordinates(props.value)
    }
  }

  const handleChangeCrop: CropsProps['onChange'] = (_, __, coordinates) => {
    if (coordinates.length > 4) {
      message.error('热区设置到达上限，一个图文广告最多存在5个热区，避免热区交错产生的异物。')
      return
    }
    setCoordinates(coordinates)
  }

  const onSubmitCoordinates = async () => {
    if (coordinates.length === 0) {
      message.error('暂未选择图片热区，请选择后在保存。')
      return false
    }
    props.onChange(coordinates)
    return true
  }

  return (
    <SetterModal
      title='选择热区'
      onInitial={onInitialImageSize}
      onOk={onSubmitCoordinates}
      trigger={
        props.value?.length
          ? (
            <Typography.Link>{`已选中${props.value?.length}个区域`}</Typography.Link>
            )
          : (
            <Button type='primary'>匡选热区</Button>
            )
      }
    >
      <Space size={25} align='start'>
        <MultiCrops
          src={props.img}
          width={resize?.width}
          height={resize?.height}
          coordinates={coordinates}
          onChange={handleChangeCrop}
          onDelete={handleChangeCrop}
        />
        <Tabs accessKey={coordinateKey} onChange={(key) => setCoordinateKey(key)}>
          {
              coordinates.map((item, index) => (

                <Tabs.TabPane tab={'热区' + (index + 1)} key={index}>
                  <Descriptions column={1}>
                    <Descriptions.Item label='x'>{item.x} px</Descriptions.Item>
                    <Descriptions.Item label='y'>{item.y} px</Descriptions.Item>
                    <Descriptions.Item label='宽度'>{item.width} px</Descriptions.Item>
                    <Descriptions.Item label='高度'>{item.height} px</Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>
              ))
            }
        </Tabs>
      </Space>
    </SetterModal>
  )
}

export default React.memo(MultiCropSetter)
