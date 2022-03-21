import { Plugin, Models } from '@rematch/core'
import undoable from 'redux-undo'

const undoPlugin = <
	TModels extends Models<TModels>,
	TExtraModels extends Models<TModels> = Record<string, never>
>(): Plugin<TModels, TExtraModels> => {
  return {
    onReducer (reducer: Redux.Reducer): void | Redux.Reducer {
      return undoable(reducer)
    },
    onRootReducer (rootReducer: Redux.Reducer): Redux.Reducer {
      return undoable(rootReducer)
    }
  }
}

export default undoPlugin
