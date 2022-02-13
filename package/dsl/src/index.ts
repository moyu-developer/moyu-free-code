/**
 * @name 面板配置列表
 * @name Panel configuration list
 * @name Panels.TEXT 字体样式编辑板
 */

import React from "react";

export enum Panels {
  'TEXT' = 'text',
  'FLEX' = 'flex'
}


export interface MicroNode {
  type: string;
  uniqueId: string;
  props?: React.FunctionComponent<Record<string, any>>
  nodes?: MicroNode[]
}

export interface DSLNodeSchema {

  /** @name 组件名称，需要标识  */
  name: string,
  
  /** @name 图标地址，如果不填默认会使用组件名称显示 */
  icon?: string,

  /** @name 组件chunk地址，默认为lib组件，如果需要远程引入则使用chunk地址 */
  chunkCDN?: string
}

export interface DSLView {
  title
}


export function sum (a: number, b: number) {
  return a+b
}