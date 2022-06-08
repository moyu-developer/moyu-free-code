export default [
  { label: '工作台', key: '/' }, // 菜单项务必填写 key
  { label: '组件中心', key: '/components' },
  {
    label: '数据远',
    key: '/data',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }]
  }
]
