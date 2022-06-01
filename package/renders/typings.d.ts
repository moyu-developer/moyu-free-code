import { System as SystemJS } from 'systemjs'

declare let window: Window & typeof globalThis & {
  System: SystemJS
}
