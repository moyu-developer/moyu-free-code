import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'

interface MicroPageDesktop {}

const initializeCommonState: MicroPageDesktop = {}

const microPageDesktopModal = createModel<RootModel>()({
  state: initializeCommonState,
  effects: (dispatch) => ({
  }),
  reducers: {}
})

store.addModel({ name: 'microPageDesktop', ...microPageDesktopModal })

export type MicroPageDesktopModal = typeof microPageDesktopModal;
