import React from 'react'
import Backdrop from './Backdrop'
import '../assets/custom-utilities.css'

export const Modal = ({children, isModalActive, closeModal}) => {
    let classes = 'fixed -mt-16 rounded-lg z-40 bg-blue-900 opacity-0 transform -translate-y-full transition duration-500 ease-out'

    if (isModalActive) {
        classes = 'fixed -mt-16 rounded-lg z-40 bg-blue-900 opacity-100 transform translate-y-0 transition duration-500 ease-out'
    }

    return (
        <>
            <Backdrop isActive={isModalActive} removeBackdrop={closeModal} />
            <div className={classes}>
               {children}
            </div>
        </>
    )
}
