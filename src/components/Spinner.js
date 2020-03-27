import React from 'react'
import logo from '../assets/logo.svg'
import '../assets/custom-utilities.css'

export default function Spinner () {
  return (
    <img src={logo} className='h-32 w-32 spin' alt='logo' />
  )
}
