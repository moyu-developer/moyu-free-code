import * as React from 'react'
import { Form, Collapse } from '@douyinfe/semi-ui'

const { Select, Radio, RadioGroup, Switch, Input } = Form

export default () => {
  return (
    <Collapse.Panel header='按钮设置' itemKey='custom-button-panel-key'>
      <Select
        style={{ width: '100%' }}
        field='props.color'
        label='按钮类型'
        initValue='primary'
        optionList={[
          {
            label: '默认',
            value: 'default',
            otherKey: 0
          },
          {
            label: '主要',
            value: 'primary',
            otherKey: 1
          },
          {
            label: '成功',
            value: 'success',
            otherKey: 2
          },
          {
            label: '警告',
            value: 'warning',
            otherKey: 3
          },
          {
            label: '危险',
            value: 'danger',
            otherKey: 4
          }
        ]}
      />

      <Select
        style={{ width: '100%' }}
        field='props.fill'
        label='填充模式'
        initValue='solid'
        optionList={[
          {
            label: '去除',
            value: 'none',
            otherKey: 0
          },
          {
            label: '充满',
            value: 'solid',
            otherKey: 1
          },
          {
            label: '空心',
            value: 'outline',
            otherKey: 2
          }
        ]}
      />
      <Select
        style={{ width: '100%' }}
        field='props.size'
        label='按钮大小'
        initValue='middle'
        optionList={[
          {
            label: '迷你',
            value: 'mini',
            otherKey: 0
          },
          {
            label: '较小',
            value: 'small',
            otherKey: 1
          },
          {
            label: '正常',
            value: 'middle',
            otherKey: 2
          },
          {
            label: '较大',
            value: 'large',
            otherKey: 3
          }
        ]}
      />
      <Switch field='props.block' label='块级元素' />
      <Switch field='props.disabled' label='是否禁用' />
      <Input field='props.loadingText' label='加载文字' min={0} max={5} />
      <RadioGroup field='props.type' label='按钮类型' initValue='default'>
        <Radio value='default'>默认</Radio>
        <Radio value='submit'>提交</Radio>
        <Radio value='reset'>重置</Radio>
      </RadioGroup>
      <RadioGroup field='props.shape' label='按钮形状' initValue='default'>
        <Radio value='default'>默认</Radio>
        <Radio value='rounded'>椭圆</Radio>
        <Radio value='rectangular'>矩形</Radio>
      </RadioGroup>
    </Collapse.Panel>
  )
}
