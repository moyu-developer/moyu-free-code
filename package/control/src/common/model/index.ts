import { init } from '@rematch/core'
import { globalModels } from './connect'
import undoPlugin from './undo'
import type { RematchDispatch, RematchRootState } from '@rematch/core'
import type { RootModel } from './connect'
import type { UndoableOptions } from 'redux-undo'
export * from 'react-redux'

const config: UndoableOptions = {
  debug: true,
  limit: 10
}

const store = init<RootModel>({
  name: '__moyu_code__',
  models: globalModels,
  plugins: [
    undoPlugin(['schema'])
  ]
})
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store
