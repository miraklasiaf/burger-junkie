import React from 'react'

export default function Backdrop({isActive, removeBackdrop}) {
  return (
    isActive && <div className='bg-black fixed z-40 inset-0 opacity-75' onClick={removeBackdrop}/>
  )
}
