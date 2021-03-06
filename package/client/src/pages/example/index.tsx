import React, { useEffect, useState } from 'react'
import { Prompt, useLocation } from 'umi'
import {
  MaterialBasicProduct,
  ContainerProvider,
  MaterialRenderCanvas,
  PropertyPanel
} from '@moyu-code/control'
import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import { LoadRemoteComponentSync } from '@moyu-code/renders'
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

  const [remoteMaterials, setRemoteMaterials] = useState<MaterialComponentType[]>([])
  const [remotesComponents, setRenderComponents] = useState<Record<string, ReactComponent>>({})

  const load = async () => {
    await (window as any).System.import(url)
    const data = await (window as any).System.import(
      'http://175.178.14.116:9000/avatars/moyuremotevideo.umd.development.js'
    )
    const res: MaterialComponentType = await LoadRemoteComponentSync('http://175.178.14.116:9000/avatars/moyuremotevideo.umd.development.js', {
      antd: require('antd')
    })
    console.log(res, 'res')
    if (res) {
      setRenderComponents((components: any) => ({
        ...components,
        [res.component.displayName]: res.component.render
      }))
      setRemoteMaterials([...remoteMaterials, {
        ...res
      }])
    }
    // setRenderComponents({
    //   [res?.component?.displayName]: data?.default?.default?.component?.render
    // })
    // setRenderComponents({})
    // setRemoteMaterials([...remoteMaterials, {
    //   ...data?.default?.default
    // }])
  }

  useEffect(() => {
    load()
  }, [])

  const testData = remoteMaterials?.[0]

  return (
    <div className={styles.app} id='MoyuControl'>
      <Prompt message='你确定要离开么？' />
      {/* 标准层 */}
      <ContainerProvider
        materials={[...materials, ...remoteMaterials]}
        id={Number(location?.query.id)}
        depends={{
          resolve: {
            // react: 'https://unpkg.com/react@16.7.0/umd/react.production.min.js',
            // 'react-dom':
            //   'https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js',
            // lodash: 'https://unpkg.com/lodash@4.17.21/lodash.js',
            // moment: 'https://unpkg.com/moment@2.29.3/moment.js',
            // anta: 'https://unpkg.com/antd@4.21.0/dist/antd.min.js'
          }
        }}
      >
        {/* 物料列表区 */}
        <MaterialBasicProduct />
        {/* 渲染器 */}
        <MaterialRenderCanvas materialComponents={{ ...renderComponents, Iframe: testData?.component.render }} />
        {/* 属性编辑器 */}
        <PropertyPanel />
      </ContainerProvider>
    </div>
  )
}

export default Example
