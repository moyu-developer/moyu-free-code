import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import { saveViewSchemaService, SaveViewSchemaRequest } from '@moyu-code/shared'

interface ToolBarState {
  scale: number,
  pointer: number
}

const state: ToolBarState = {
  scale: 100,
  pointer: 0
}

export default createModel<RootModel>()({
  name: 'toolbar',
  state,
  effects: (dispatch) => ({
    async save (status: SaveViewSchemaRequest['status'], state) {
      const pageInfo = state.common?.pageInfo
      const { data } = await saveViewSchemaService({
        ...pageInfo,
        description: pageInfo.description || '',
        schema: JSON.stringify(state.schema) || '',
        env: 0,
        status
      })
      if (state.common.pageInfo?.id !== data) {
        dispatch.common.setPageInfo({
          id: data
        })
      }
    }
  }),

  reducers: {
    /** 后退 */
    back (state) {
      state.pointer += 1
    },
    /** 前进 */
    forward (state) {
      state.pointer -= 1
    },
    /** 放大 */
    amplify (state) {
      state.scale += 10
    },
    /** 缩小 */
    narrow (state) {
      state.scale -= 10
    },
    /** 设置 scale */
    setScale (state, size: number) {
      state.scale = size
    }
  }
})
