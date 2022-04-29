import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import { GridLayoutRender } from '@moyu-code/renders'
import schema from './data.json'
import type { NextPage } from 'next'

const renderComponents: Record<string, ReactComponent> = {}

Object.keys(Materials).forEach((k: string) => {
  const material = (Materials as Record<string, MaterialComponentType>)[k]
  if (material.component?.displayName && material.component?.render) {
    renderComponents[material.component?.displayName] =
      material.component?.render
  }
})

const MicroView: NextPage<any, any> = (props) => {
  console.log(props, 'props')
  return (
    <GridLayoutRender
      height='100vh'
      sourceData={props.schema || []}
      components={renderComponents}
      onRender={(element) => {
        return (
          <div
            style={{
              position: 'relative'
            }}
          >
            {element}
          </div>
        )
      }}
    />
  )
}

MicroView.getInitialProps = async (ctx) => {
  console.log(ctx.query, 'ctx')
  const res = await fetch(`http://localhost:8500/api/v1/views/${ctx.query}`)
  const json = await res.json()
  if (json.code === 200) {
    return {
      pageData: json.data
    }
  }
  return { pageData: null }
}

export default MicroView
