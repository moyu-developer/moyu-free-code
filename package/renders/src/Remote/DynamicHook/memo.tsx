export interface RemoteOptions {
  resolve: Record<string, string>;
}

export type RemoteLoaderEntriesResult = Array<{
  name: string;
  id: string;
  module?: any
}>

export class RemoteLoader {
  private resolve?: RemoteOptions['resolve']
  private SystemJS?: typeof System = System

  /**
   * 注册Module
   */
  async register (resolve: RemoteOptions['resolve']) {
    this.resolve = resolve
    const pipeLine: Promise<any>[] = []
    Object.values(resolve).forEach(async (url: string) => {
      await this.SystemJS?.import(url)
    })
    // await Promise.all(pipeLine)
  }

  entries (resolve: RemoteOptions['resolve']) {
    const result: RemoteLoaderEntriesResult = []
    for (const [id, ns] of this.SystemJS.entries()) {
      const name = Object.keys(resolve).find((key: string) => {
        if (resolve?.[key] === id) return true
        return false
      })
      result.push({
        name,
        id,
        module: ns
      })
    };
    return result
  }
}
