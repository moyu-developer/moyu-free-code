import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import type { MaterialComponentType, RenderNodeType } from '@moyu-code/shared'
import { getViewByIdService } from '@moyu-code/shared'
import { parseSchemaJSON } from 'src/utils'

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

  depends?: any,

}

const initializeCommonState: CommonState = {
  schema: [],
  materials: [],
  pageInfo: {
    name: '默认标题',
    background: '#FFF',
    description: '',
    env: 0
  }
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,

  effects: (dispatch) => ({
    async applyPublishBySchema (_, state) {
    },

    /**
     * 获取当前页面信息和单体结构
     * @param id 页面id
     */
    async applyGetViewDetailById (id: number) {
      const { code, data } = await getViewByIdService(id)
      if (code === 200) {
        const { schema, ...pageInfo } = data
        dispatch.schema.updated(parseSchemaJSON(schema))
        dispatch.common.updated({
          pageInfo: pageInfo
        })
      }
    }
  }),

  reducers: {

    /** 更新common store 数据 */
    updated (state, data: Partial<CommonState>) {
      return {
        ...state,
        ...data
      }
    },

    /** 更新common store 数据 */
    setPageInfo (state, data: Partial<CommonState['pageInfo']>) {
      return {
        ...state,
        pageInfo: {
          ...state.pageInfo,
          ...data
        }
      }
    }

  }
})
