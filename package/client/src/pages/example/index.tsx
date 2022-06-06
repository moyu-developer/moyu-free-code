import { useEffect } from 'react'
import { Prompt, useLocation } from 'umi'
import {
  MaterialBasicProduct,
  ContainerProvider,
  MaterialRenderCanvas,
  PropertyPanel
} from '@moyu-code/control'
import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import './model'

import styles from '@/styles/layout.module.css'

const url = 'https://unpkg.com/react@16.7.0/umd/react.production.min.js'

const materials: Array<MaterialComponentType | null> = Object.keys(Materials)
  .map((k: string) => {
    const line = (
      Materials as unknown as Record<string, MaterialComponentType>
    )[k]
    if (line.name) {
      return line
    }
    return null
  })
  .filter((v) => v !== null)

const renderComponents: Record<string, ReactComponent> = {}

Object.keys(Materials).forEach((k: string) => {
  const material = (
    Materials as unknown as Record<string, MaterialComponentType>
  )[k]
  if (material.component?.displayName && material.component?.render) {
    renderComponents[material.component?.displayName] =
      material.component?.render
  }
})

const Example = () => {
  /** @name dslView 页面结构 */

  const location = useLocation()

  const load = async () => {
    await (window as any).System.import(url)
    const data = await (window as any).System.import(
      'http://minio.moyu-developers.cn/avatars/moyuremotevideo.umd.production.min.js'
    )
    console.log(data, 'data')
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className={styles.app} id='MoyuControl'>
      <Prompt message='你确定要离开么？' />
      {/* 标准层 */}
      <ContainerProvider
        materials={materials as MaterialComponentType[]}
        id={Number(location?.query.id)}
        depends={{
          resolve: {
            react: 'https://unpkg.com/react@16.7.0/umd/react.production.min.js',
            'react-dom':
              'https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js',
            lodash: 'https://unpkg.com/lodash@4.17.21/lodash.js'
          }
        }}
      >
        {/* 物料列表区 */}
        <MaterialBasicProduct />
        {/* 渲染器 */}
        <MaterialRenderCanvas materialComponents={renderComponents} />
        {/* 属性编辑器 */}
        <PropertyPanel />
      </ContainerProvider>
    </div>
  )
}

export default Example
