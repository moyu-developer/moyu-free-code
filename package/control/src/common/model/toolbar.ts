import { createModel } from '@rematch/core'
import { RootModel } from './connect'

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
  effects: () => ({
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
