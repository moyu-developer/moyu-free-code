import React, { createElement } from 'react'
import type { Layout } from 'react-grid-layout'

export type ReactComponent = string | React.FunctionComponent<any> | React.ComponentClass<any, any>
/**
 * 渲染器VNode模型
 * @interface 声明RenderNode的节点类型
 * @description 一个pattern大概的长相
 */
export interface RenderNodeType {
  /**
   * @name 唯一id，key
   */
  uid: React.Key;

  /** @name 渲染npm组件的标识 */
  component: string;

  /** @name layout渲染块 */
  gridLayout: Omit<Layout, 'i'>;

  props?: Record<string, any> & {
    style?: React.CSSProperties;
    className?: string
  }

  children?: RenderNodeType[]
}

/**
 * 素材库组件模型
 * @interface 素材组件的类型
 */
export interface MaterialComponentType {
  /**
   * @name 组件名称
   * @description 一个组件必须声明一个名称。
   */
  name: string;

  /**
   * @name 组件icon
   * @description 组件的图标，如果不存在会以NodeType首字母做示例
   */
  icon?: string;

  /**
   * @name 渲染的组件
   * @description 组件必然要有一个展示的node
   */
  component: {
    /** @name 显示名称 */
    displayName: string;

    /** @name 显示名称 */
    render: ReactComponent
  };

  /**
   * @name 默认的props
   * @description 默认props，会在初始化时设置进内容面板
   */
  defaultProps?: RenderNodeType['props'];

  /**
   * @name 组件默认的grid属性
   */
  gridLayout?: Partial<Layout>

  /**
   * @name 属性面板，用于配置props内容
   */
  panel: Array<{
    key: React.Key,
    bridge?: Record<string, any>,
    render: ReactComponent
  }>

}
