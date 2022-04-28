import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import { GridLayoutRender } from '@moyu-code/renders'
import schema from './data.json'


console.log(schema, 'schema')

const renderComponents: Record<string, ReactComponent> = {}

Object.keys(Materials).forEach(
  (k: string) => {
    const material = (Materials as Record<string, MaterialComponentType>)[k]
    if (material.component?.displayName && material.component?.render) {
      renderComponents[material.component?.displayName] = material.component?.render
    }
  }
)


export default () => {

  console.log(renderComponents, 'renderComponents')

  return (
    <div>
      <GridLayoutRender sourceData={schema as any} components={renderComponents} />
    </div>
  )
}