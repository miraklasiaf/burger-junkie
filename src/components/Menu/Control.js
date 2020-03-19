import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function Control(props) {
    return (
      <div className='flex justify-center pb-3'>
        <button
          onClick={props.delete}
          className={
            props.disabled
              ? 'flex justify-center bg-blue-300 text-blue-600 w-16 cursor-not-allowed'
              : 'flex justify-center bg-blue-300 text-blue-900 w-16'
          }
          disabled={props.disabled}
          aria-label='Decrease button'
        >
          <FaMinus />
        </button>
        <p className='bg-blue-300 w-32 text-blue-900 select-none text-center'>
          {props.label}
        </p>
        <button
          onClick={props.add}
          className='flex justify-center text-blue-900 w-16 bg-blue-300'
          aria-label='Increase button'
        >
          <FaPlus />
        </button>
      </div>
    )
}
