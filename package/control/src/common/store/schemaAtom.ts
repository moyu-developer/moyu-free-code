import { atom } from 'recoil'
import { RenderNodeType } from '@moyu-code/schema'

export const schemaState = atom<RenderNodeType[]>({
  key: 'schemaState',
  default: [],
});