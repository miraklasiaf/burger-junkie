import React from 'react'
import { useGlobalContext } from '../../context/GlobalState'

export default function Backdrop() {
  const { isSidebarActive, setSidebar } = useGlobalContext()

  return (
    isSidebarActive ? <div className='bg-black fixed z-40 inset-0 opacity-75' onClick={() => setSidebar(false)} /> : null
  )
}
