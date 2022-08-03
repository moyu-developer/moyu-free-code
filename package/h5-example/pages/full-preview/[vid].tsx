import * as React from 'react'
import * as Materials from '@moyu-code/materials'
import { MaterialComponentType, ReactComponent } from '@moyu-code/shared'
import { EditorLayoutRender } from '@moyu-code/renders'
import { useMemo, useEffect } from 'react'
import type { NextPage } from 'next'
import useMessage from '../../hooks/useMessage'
import { useRouter } from 'next/router'

const renderComponents: Record<string, ReactComponent> = {}

Object.keys(Materials).forEach((k: string) => {
  const material = (Materials as unknown as Record<string, MaterialComponentType>)[k]
  if (material.component?.displayName && material.component?.render) {
    renderComponents[material.component?.displayName] =
      material.component?.render
  }
})

const MicroView: NextPage<any, any> = (props) => {
  const router = useRouter()
  const data = useMessage()

  useEffect(() => {
    if (!props.pageData) {
      router.replace('/404')
    }
  }, [props.pageData])

  const schema = useMemo(() => {
    if (props.pageData?.schema) {
      return JSON.parse(props.pageData?.schema) || []
    }
    return []
  }, [props?.pageData])

  return (
    <div>
      <EditorLayoutRender sourceData={schema || []} components={renderComponents} />
    </div>
    // <GridLayoutRender
    //   height='100vh'
    //   sourceData={schema || []}
    //   components={renderComponents}
    //   onRender={(element) => {
    //     return (
    //       <div
    //         style={{
    //           position: 'relative'
    //         }}
    //       >
    //         {element}
    //       </div>
    //     )
    //   }}
    // />
  )
}

MicroView.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:8500/api/v1/views/${query?.vid}`)
  const json = await res.json()
  if (json.code === 200) {
    return {
      pageData: json.data
    }
  }
  return { pageData: null }
}

export default MicroView
