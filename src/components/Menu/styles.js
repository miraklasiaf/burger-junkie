import objstr from 'obj-str'
import React from 'react'
import tw from 'tailwind.macro'

export const MenuContainer = tw.div`
  bg-blue-200 w-full max-w-sm flex flex-col justify-center p-5 border-content rounded-lg mt-2
`

export const PriceWrapper = tw.p`
  text-center text-blue-900 pb-6 font-bold select-none
`

export const ButtonWrapper = tw.div`
  flex justify-center pt-2
`

export const Button = ({ children, on, onToggle }) => (
  <button
    className={
      'hover:underline ' +
      objstr({
        'text-blue-400': !on,
        'text-green-400': on
      })
    }
    onClick={() => onToggle()}
  >
    {children}
  </button>
)
