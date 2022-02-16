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

export interface MicroView {
   /** @name 页面名称  */
  viewName: string;
  props?: DSLNodeSchema['props']
  children?: DSLNodeSchema[]
}

export interface DSLNodeSchema {

  /** @name 组件名称，用于加载组件，如果是chunk则为custom  */
  type: string;

  /** @name 组件名称，用于加载组件，如果是chunk则为custom  */
  uid: string

  /** @name 组件属性，属性配置面板会进行操作  */
  props?: {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    [K: string]: any
  }

  /** @name 子组件，用于模块嵌套 */
  children?: DSLNodeSchema[]
}