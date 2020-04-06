import { useReducer } from 'react'
import useReducerWithLogger from './reducerLogger'

const useReducerWithLog =
  process.env.NODE_ENV === 'development' ? useReducerWithLogger : useReducer

export default useReducerWithLog
