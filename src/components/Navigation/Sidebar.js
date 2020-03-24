import React from 'react'
import Backdrop from '../Backdrop'
import { NavItem } from './NavItem'
import { GiHamburger } from 'react-icons/gi'
import '../../assets/custom-utilities.css'
import { useSidebarContext } from '../../context/SidebarContext'

export default function Sidebar () {
  const { isSidebarOpen, setSidebar } = useSidebarContext()

  const handleSidebarClose = () => {
    setSidebar(false)
  }

  return (
    <>
      <Backdrop isActive={isSidebarOpen} removeBackdrop={handleSidebarClose} />
      <div
        role='navigation'
        className={isSidebarOpen
          ? 'fixed h-full w-3/4 top-0 z-50 bg-blue-900 transfrom translate-x-0 transition duration-500 ease-out'
          : 'fixed h-full w-3/4 top-0 z-50 bg-blue-900 transform -translate-x-full transition duration-500 ease-out'}
        onClick={handleSidebarClose}
      >
        <div className='flex items-center justify-evenly h-16 text-blue-200 border-b'>
          <p>Burger</p>
          <GiHamburger className='w-8 h-8 text-blue-200' />
          <p>Junkie</p>
        </div>
        <div className='text-blue-200 flex flex-col justify-center items-center mt-5'>
          <div className='-ml-32'>
            <NavItem />
          </div>
        </div>
      </div>
    </>
  )
}
