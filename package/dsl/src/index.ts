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

export interface DSLNode {
  uniqueId: string;
  type: string;
  defaultProps: MicroNode['props'],
}