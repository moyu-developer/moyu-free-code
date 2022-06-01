import { Plugin, Models } from '@rematch/core'
import undoable, { UndoableOptions } from 'redux-undo'

type ModelConfig<TModels> = {
  [modelName in keyof TModels]: UndoableOptions
}

type ModelName<TModels> = keyof TModels
type RootConfig = { root: UndoableOptions }

type PluginConfig<TModels> =
  | ModelName<TModels>
  | Array<ModelName<TModels> | ModelConfig<TModels>>
  | ModelConfig<TModels>
  | RootConfig

const undoPlugin = <
  TModels extends Models<TModels>,
  TExtraModels extends Models<TModels> = Record<string, never>
>(
    config?: PluginConfig<Models<TModels>>
  ): Plugin<TModels, TExtraModels> => {
  return {
    onReducer (reducer, modelName) {
      if (!config) return null

      const base: UndoableOptions = {
        undoType: `${modelName.toUpperCase()}_UNDO`,
        redoType: `${modelName.toUpperCase()}_REDO`
      }

      // handles string literal and array options
      // @ts-ignore
      if ((<any[]>config).indexOf) {
        if ((<string[]>config).indexOf(modelName) >= 0) { return undoable(reducer, base) }

        const mc = (<ModelConfig<TModels>[]>config).find(
          (a) => a[modelName]
        )

        if (mc) { return undoable(reducer, { ...base, ...mc[modelName] }) }
      }

      const mc = (<ModelConfig<TModels>>config)[modelName]
      if (mc) return undoable(reducer, { ...base, ...mc })
      return null
    },
    onRootReducer (rootReducer) {
      if (!config) return undoable(rootReducer)

      const c = (<RootConfig>config).root
      if (c) return undoable(rootReducer, c)
      return null
    }
  }
}

export default undoPlugin
