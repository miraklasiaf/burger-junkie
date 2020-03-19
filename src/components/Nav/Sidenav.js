import React from 'react'
import Nav from './index'
import Backdrop from './Backdrop'

export default function Sidenav() {
    return (
        <>
            <Backdrop />
            <div role='navigation' className={`fixed h-full max-w-4xl left-0 top-0 z-200 bg-white box-border`}>
                <Nav />
            </div>
        </>
    )
}
