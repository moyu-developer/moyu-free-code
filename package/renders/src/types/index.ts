import type { RenderNodeType, ReactComponent } from '@moyu-code/shared'

export interface SchemaRenderProps {
  components: Record<string, ReactComponent>;
  sourceData: RenderNodeType[];
  rowHeight: number
}