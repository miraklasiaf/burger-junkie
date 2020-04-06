/* eslint-disable no-console */
import { useRef, useReducer, useMemo, useEffect } from 'react'

function withLogger (dispatch) {
  return function (action) {
    console.groupCollapsed('Action:', action.type)
    return dispatch(action)
  }
}

export default function (...args) {
  const prevState = useRef(args[1])
  const [state, dispatch] = useReducer(...args)

  const dispatchWithLogger = useMemo(() => {
    return withLogger(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (state !== args[1]) {
      console.log('Prev state: ', prevState.current)
      console.log('Next state: ', state)
      console.groupEnd()
    }
    prevState.current = state
  }, [args, state])

  return [state, dispatchWithLogger]
}
