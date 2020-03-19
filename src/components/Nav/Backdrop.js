import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

export default function Backdrop() {
  const { isSidenavActive } = useGlobalState()

  console.log(isSidenavActive)
  return (
    isSidenavActive ? <div className='bg-black fixed z-100 inset-0 opacity-75' /> : null
  )
}
