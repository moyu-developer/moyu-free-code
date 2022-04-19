import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/shared'

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
    }

  }
})
