import { MobileRender } from '@moyu-code/renders'
import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import { useEffect } from 'react'



const renderComponents: Record<string, ReactComponent> = {}

Object.keys(Materials).forEach((k: string) => {
  const material = (Materials as unknown as Record<string, MaterialComponentType>)[k]
  if (material.component?.displayName && material.component?.render) {
    renderComponents[material.component?.displayName] =
      material.component?.render
  }
})

function App() {

  const getPageData = async () => {
    const res = await fetch(`http://localhost:8500/api/v1/views/${35}`)
    const json = await res.json()
    if (json.code === 200) {
      console.log(json.data)
    }

  }
  
  useEffect(() => {
    getPageData()
  }, [])
  return (
    <div>
      1
      <MobileRender sourceData={[]} components={renderComponents} />
    </div>
  )
}

export default App
