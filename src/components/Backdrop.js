import React from 'react'
import PropTypes from 'prop-types'

export default function Backdrop ({ isActive, removeBackdrop }) {
  return (
    isActive &&
      <div
        role='presentation'
        className='bg-black fixed z-40 inset-0 opacity-75'
        onClick={removeBackdrop}
        onKeyPress={removeBackdrop}
      />
  )
}

Backdrop.propTypes = {
  isActive: PropTypes.bool.isRequired,
  removeBackdrop: PropTypes.func
}
