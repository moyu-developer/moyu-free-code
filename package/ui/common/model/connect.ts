import type { Models } from '@rematch/core'
import commonModel from './common'
import { MicroPageDesktopModal } from '@/pages/example/model'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  microPage: MicroPageDesktopModal
}

export const globalModels: Pick<RootModel, 'common'> = {
  common: commonModel
}
