import { createModel } from '@rematch/core'
import type { RootModel } from '@/common/model/connect'
import store from '@/common/model'
import {} from '@/api'

interface MyAppModelState {

}

const state: MyAppModelState = {}

const myAppModel = createModel<RootModel>()({
  state,
  effects: () => ({}),
  reducers: {}
})

store.addModel({ name: 'myapp', ...myAppModel })

export type MyAppModel = typeof myAppModel;
