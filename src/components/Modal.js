import React from 'react'
import Backdrop from './Backdrop'
import '../assets/custom-utilities.css'
import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types'

export const Modal = ({ children, active, closeModal, title, checkout }) => {
  let transitionClass = 'opacity-0 transform -translate-y-full transition duration-500 ease-out'
  if (active) {
    transitionClass = 'opacity-100 transform translate-y-0 transition duration-500 ease-out'
  }

  return (
    <>
      <Backdrop isActive={active} />
      <div className={`fixed -mt-16 bg-blue-100 rounded-lg z-40 ${transitionClass}`}>
        <div className='bg-blue-600 flex justify-between items-center px-5 py-2 rounded-t-lg'>
          <h2 className='text-blue-100 font-medium'>{title}</h2>
          <MdClose className='text-blue-100 cursor-pointer' onClick={closeModal} />
        </div>
        <div className='px-5'>
          <div className='flex flex-col items-center border-b-2 pt-3 pb-5'>
            {children}
          </div>
        </div>
        <div className='flex justify-end px-5 py-3'>
          <button
            className='bg-red-500 rounded-lg px-3 py-2 text-blue-100 mr-3'
            onClick={closeModal}
          >
                        Cancel
          </button>
          <button className='bg-blue-500 rounded-lg px-3 py-2 text-blue-100' onClick={checkout}>Checkout</button>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  closeModal: PropTypes.func,
  checkout: PropTypes.func
}
