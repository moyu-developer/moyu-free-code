import * as React from "react";

/**
 * 声明RenderNode的节点类型
 * @description 一个pattern大概的长相
 */

export interface RenderNodeType {
  /** 
   * @name 唯一id，key
   */
  uid: React.Key;

  /** @name 渲染npm组件的标识 */
  component: string;
  
  props?: Record<string, any> & {
    style?: React.CSSProperties;
    className?: string
  }

  children?: RenderNodeType[]
}


/**
 * 素材组件的类型
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
  component: string;

  /**
   * @name 默认的props
   * @description 默认props，会在初始化时设置进内容面板
   */
  defaultProps?: RenderNodeType['props'];
  
  /**
   * @name 属性面板，用于配置props内容
   */
  panel:  Array<React.FunctionComponent | React.ComponentClass> 
}