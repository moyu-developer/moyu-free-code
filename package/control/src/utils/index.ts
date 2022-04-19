import { RenderNodeType } from '@moyu-code/shared'

export const findDepSchema = (
  data: RenderNodeType[],
  format?: (node: RenderNodeType) => RenderNodeType
): RenderNodeType[] => {
  return data.map((item) => {
    let row = { ...item }
    if (format) {
      row = format(item)
    }
    return {
      ...row,
      children:
        item.children && item.children.length > 0
          ? findDepSchema(item.children, format)
          : undefined
    }
  })
}

/**
 *
 * @param tree schemaData
 * @param some 查找条件
 * @param path 路径
 * @returns 路径数组
 */
export const findTreePath = (
  tree: RenderNodeType[],
  some: (node: RenderNodeType) => boolean,
  path: number[] = []
): number[] => {
  if (!Array.isArray(tree) || tree?.length === 0) return []
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    path.push(i)
    if (some(node)) return path
    if (node.children) {
      const findChildren = findTreePath(node.children, some, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}
