import React, { Suspense, useEffect, useState } from 'react'
import axios from 'axios'

const load: any = async () => {
  const { data, status } = await axios.get('http://175.178.14.116:9000/avatars/moyuremotevideo.umd.production.min.js')
  if (status === 200) {
    const module: any = {
      exports: {}
    }
    const require = (name: string) => {
      console.log(name, 'name')
      if (name === 'react') return React
      return null
    }

    // eslint-disable-next-line no-new-func
    Function('require, exports, module', data)(require, module.exports, module)
    return module
  }
  return null
}

const DynamicComponent = (props: any) => {
  const [Component, setComponent] = useState<any>()

  useEffect(() => {
    load().then((remote: any) => {
      console.log(remote, 'module')
      const { default: Element } = remote?.exports
      setComponent(<Element />)
    })
  }, [])

  console.log(Component, 'Component')

  return (
    <Suspense
      fallback={
        <div style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <span style={{ fontSize: 50 }}>Loading...</span>
        </div>
      }
    >
      {
          Component
        }
    </Suspense>
  )
}

export default React.memo(DynamicComponent)
