export interface RemoteOptions {
  resolve: Record<string, string>;
}

export type RemoteLoaderEntriesResult = Array<{
  name: string;
  id: string;
  module?: any
}>

export class RemoteLoader {
  constructor (private resolve: RemoteOptions['resolve']) {}
  /**
   * 注册Module
   */
  async register (url) {
    const module = await System.import(url)
  }

  entries () {
    const result: RemoteLoaderEntriesResult = []
    for (const [id, ns] of System.entries()) {
      const name = Object.keys(this.resolve).find((key: string) => {
        if (this.resolve?.[key] === id) return true
        return false
      })
      result.push({
        name,
        id,
        module: ns
      })
    };
  }
}
