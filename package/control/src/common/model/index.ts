import { init } from '@rematch/core'
import { globalModels } from './connect'
import type { RematchDispatch, RematchRootState } from '@rematch/core'
import type { RootModel } from './connect'

const store = init<RootModel>({
  name: '__moyu_code__',
  models: globalModels,
  plugins: []
})
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<
  RootModel
>;

export default store
