import * as React from 'react'
import axios from 'axios'
const defaultImports: Record<string, any> = {
  react: React
}

export const LoadRemoteComponentSync = async (url, resolve?: Record<string, any>) => {
  const imports = {
    ...defaultImports,
    ...resolve
  }

  const { data, status } = await axios.get(url)

  if (status === 200) {
    const module: any = {
      exports: {}
    }
    const require = (name: string) => {
      if (imports[name]) return imports[name]
      return null
    }
    // eslint-disable-next-line no-new-func
    Function('require, exports, module', data)(require, module.exports, module)

    const defaultUMDModule = module?.exports?.default

    if (defaultUMDModule) {
      return defaultUMDModule
    }

    return null
  }
}
