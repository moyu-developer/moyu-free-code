export const LogoUrl: string = 'https://s2.loli.net/2022/03/16/f6AbT7nGh8OQt9y.png'
export const GithubUrl: string = 'https://github.com/moyu-developer'

export enum DropNames {
  Component = 'drop_component_symbol',
  Field = 'drop_field_symbol'
}

/** @Select 应用类型 */

export const applicationType = [
  {
    label: '全部应用',
    value: -1
  },
  {
    label: '我创建的',
    value: 1
  }
]

/** @Select 应用状态  */

export const applicationStatus = [
  {
    label: '全部状态',
    value: -1
  },
  {
    label: '已发布',
    value: 1
  },

  {
    label: '未发布',
    value: 1
  }
]
