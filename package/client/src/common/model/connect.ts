import type { Models } from '@rematch/core'
import commonModel from './common'
import type { MicroPageDesktopModal } from '@/pages/example/model'
import type { MyAppModel } from '@/pages/desktop/model'

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  microPage: MicroPageDesktopModal
  myApp: MyAppModel
}

export const globalModels: Pick<RootModel, 'common'> = {
  common: commonModel
}
