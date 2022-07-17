import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'

interface ComponentCenter {}

const initialData: ComponentCenter = {}

const componentModal = createModel<RootModel>()({
  state: initialData,
  effects: (dispatch) => ({
  }),
  reducers: {}
})

store.addModel({ name: 'microPageDesktop', ...componentModal })

export type ComponentCenterModal = typeof componentModal;
