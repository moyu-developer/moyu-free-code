import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import { saveViewSchemaService, SaveViewSchemaRequest } from '@moyu-code/shared'
import { message } from 'antd'

interface ToolBarState {
  scale: number,
  isShare: boolean;
}

const state: ToolBarState = {
  scale: 100,
  isShare: false
}

export default createModel<RootModel>()({
  name: 'toolbar',
  state,
  effects: () => ({
    async save (status: SaveViewSchemaRequest['status'], state) {
      const pageInfo = state.common?.pageInfo
      const { data: id } = await saveViewSchemaService({
        ...pageInfo,
        description: pageInfo.description || '',
        schema: JSON.stringify((state.schema as any)?.present) || '',
        env: 0,
        status
      })
      message.success(status === 1 ? '保存成功' : '发布成功')
      if (state.common.pageInfo?.id !== id) {
        // dispatch.common.updated({

        // })
      }
    }
  }),

  reducers: {
    /** 放大 */
    amplify (state) {
      return {
        ...state,
        scale: state.scale + 10
      }
    },
    /** 缩小 */
    narrow (state) {
      return {
        ...state,
        scale: state.scale - 10
      }
    },
    /** 设置 scale */
    setScale (state, size: number) {
      return {
        ...state,
        scale: size
      }
    },

    /** 分享 */
    setShare (state, bool: boolean) {
      return {
        ...state,
        isShare: bool
      }
    }
  }
})
