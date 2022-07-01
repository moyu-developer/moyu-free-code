import * as React from 'react'
import axios from 'axios'
const defaultImports: Record<string, any> = {
  react: React
}

export const LoadRemoteComponentSync = async (url, resolve?: any) => {
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

    console.log(module, 'module')
    return module?.exports?.default || null
  }
}
