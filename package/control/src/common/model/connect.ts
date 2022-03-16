import type { Models } from '@rematch/core'
import commonModel from './common'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
}

export const globalModels: Pick<RootModel, 'common'> = {
  common: commonModel
}
