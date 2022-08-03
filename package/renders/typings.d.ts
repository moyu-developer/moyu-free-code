import { System as SystemJS } from 'systemjs'
import type { RenderNodeType, ReactComponent } from '@moyu-code/shared'

declare let window: Window & typeof globalThis & {
  System: SystemJS
}

export interface SchemaRenderProps {
  components: Record<string, ReactComponent>;
  sourceData: RenderNodeType[];
}