import type { Models } from '@rematch/core'
import commonModel from './common'
import toolbarModel from './toolbar'
import schemaModel from './schema'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  toolbar: typeof toolbarModel;
  schema: typeof schemaModel;
}

export const globalModels: RootModel = {
  common: commonModel,
  toolbar: toolbarModel,
  schema: schemaModel
}
