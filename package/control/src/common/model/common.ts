import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/schema'
import { findDepSchema } from '../../utils'
import { isSuccess } from '@moyu-code/request'

interface CommonState {
  /** @name 正在操作的uid */
  uid?: RenderNodeType['uid']

  /** @name 当前页面的JSONSchema */
  schema: RenderNodeType[],

  /** @name 组件列表 */
  materials: MaterialComponentType[]

  /** 页面信息 */
  pageInfo: {
    id?: number;
    name: string,
    background: string,
    description?: string,
    env?: 0 | 1 | 2,
    status?: 0 | 1 | 2
  }

}

const initializeCommonState: CommonState = {
  schema: [],
  materials: [],
  pageInfo: {
    name: '默认标题',
    background: '#FFF',
    description: ''
  }
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,

  effects: () => ({
    async applyPublishBySchema (payload: any) {
    },

    async applyGetViewDetailById (id: number) {
    }
  }),

  reducers: {

    /** 更新common store 数据 */
    updated (state, data: any) {
      return {
        ...state,
        ...data
      }
    },

    /** 更新页面信息 */
    setPageInfo (state, info: Partial<CommonState['pageInfo']>) {
      return {
        ...state,
        pageInfo: {
          ...state.pageInfo,
          ...info
        }
      }
    },

    /** 通过id更新schema Props */
    setSchemaPropsById (state, payload: {
      uid: CommonState['uid'],
      fieldProps: RenderNodeType['props']
    }) {
      const newSchema = findDepSchema(state.schema, (node) => {
        if (node.uid === payload.uid) {
          return {
            ...node,
            props: {
              ...node?.props,
              ...payload.fieldProps?.props,
              style: {
                ...payload.fieldProps?.props?.style
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
})
