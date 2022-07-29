export enum DropNames {
  Component = 'drop_component_symbol',
  Field = 'drop_field_symbol',
}

/** 页面状态 */
export const MicroViewStatus = [
  {
    label: '草稿',
    value: 0
  },
  {
    label: '未发布',
    value: 1
  },

  {
    label: '已发布',
    value: 2
  }
]

/**
 * 页面布局模式
 */
export const LayoutOptions = [
  {
    label: '网格布局',
    value: 'grid'
  },
  {
    label: '线性布局',
    value: 'linear',
    disabled: true
  },
  {
    label: '弹性布局',
    value: 'flex',
    disabled: true
  }
]


export const DeviceMode = [
  {
    label: 'mobile',
    value: 0,
    size: 375,
  },
  {
    label: 'pc',
    value: 1,
    size: 750
  }
]