import type { Models } from '@rematch/core'
import commonModel from './common'
import toolbarModel from './toolbar'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  toolbar: typeof toolbarModel;
}

export const globalModels: RootModel = {
  common: commonModel,
  toolbar: toolbarModel
}
