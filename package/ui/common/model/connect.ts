import type { Models } from '@rematch/core'
import commonModel from './common'
import { SchemaModel } from '@/pages/desktop/model'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  schema: SchemaModel;
}

export const globalModels: Pick<RootModel, 'common'> = {
  common: commonModel
}
