import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function Control ({ remove, disabled, label, add }) {
  return (
    <div className='flex justify-center pb-3'>
      <button
        onClick={remove}
        className={
          disabled
            ? 'flex justify-center bg-blue-300 text-blue-600 w-16 cursor-not-allowed'
            : 'flex justify-center bg-blue-300 text-blue-900 w-16'
        }
        disabled={disabled}
        aria-label='Decrease button'
      >
        <FaMinus />
      </button>
      <p className='bg-blue-300 w-32 text-blue-900 select-none text-center'>
        {label}
      </p>
      <button
        onClick={add}
        className='flex justify-center text-blue-900 w-16 bg-blue-300'
        aria-label='Increase button'
      >
        <FaPlus />
      </button>
    </div>
  )
}
