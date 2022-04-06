import { init } from '@rematch/core'
import { globalModels } from './connect'
import immerPlugin from '@rematch/immer'
import type { RematchDispatch, RematchRootState } from '@rematch/core'
import type { RootModel } from './connect'
export * from 'react-redux'

const store = init<RootModel>({
  name: '__moyu_code__',
  models: globalModels,
  plugins: [immerPlugin({
    whitelist: ['toolbar']
  })]
})
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<
  RootModel
>;

export default store
