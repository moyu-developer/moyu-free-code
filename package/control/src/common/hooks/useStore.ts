import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Dispatch, RootState } from 'src/common/model'

export default function (selector?: (state: RootState) => Partial<RootState>) {
  const dispatch: Dispatch = useDispatch()

  const currentState = useSelector((state: RootState) => {
    if (selector) {
      return selector(state)
    }
    return state
  }, shallowEqual)

  return [currentState, dispatch] as [typeof currentState, Dispatch]
}
