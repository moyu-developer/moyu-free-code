import { createModel } from "@rematch/core";
import { RootModel } from "./connect";
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/schema'
import { findDepSchema } from "../../utils";

interface CommonState {
  /**
   * 编辑的uid
   */
  uid?: RenderNodeType['uid']

  panels: MaterialComponentType['panel']

  schema: RenderNodeType[],

  materials: MaterialComponentType[]

   
}

const initializeCommonState: CommonState = {
  panels: [],
  schema: [],
  materials: []
};

export default createModel<RootModel>()({
  name: "common",
  state: initializeCommonState,

  reducers: {

    /**
     * 设置新的物料
     * @param state commonState
     * @param payload 物料列表
     */
    setMaterialComponents: (state, payload: MaterialComponentType[]) => {
      if (payload.length) {
        return {
          ...state,
          materials: payload
        }
      }

      console.warn([`Rematch Warning: 当前设置的物料列表为空，避免无意义的updated请尝试添加更多物料`])
      return state
    },

    /**
     * 更新common store 数据
     * @param state commonState
     * @param data 修改的数据
     */
    updated: (state, data) => {
      console.log(state, data, 'updated')
      return {
        ...state,
        ...data,
      }
    },

    /**
     * 通过id更新schema Props
     * @param state commonState
     * @param data 修改的数据
     */
    setSchemaPropsById: (state, payload: {
      uid: CommonState['uid'],
      fieldProps: RenderNodeType['props']
    }) => {

      const newSchema = findDepSchema(state.schema, (node) => {
        if (node.uid === payload.uid) {
          return {
            ...node,
            props: {
              ...node?.props,
              ...payload.fieldProps?.props,
              style: {
                ...payload.fieldProps?.props.style
              }
            }
          }
        }
        return node
      })

      return {
        ...state,
        schema: newSchema
      }
    }
  }
});
