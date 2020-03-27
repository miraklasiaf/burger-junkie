import React from 'react'
import { GiHamburger } from 'react-icons/gi'
import {
  HeaderWrapper,
  HeaderContainer,
  LeftSection,
  MidSection,
  RightSection,
  Navigation,
  NavLink
} from './styles'
import '../../assets/custom-utilities.css'
import { NavItem } from './NavItem'
import { useSidebarContext } from '../../context/SidebarContext'

export default function Toolbar () {
  const { setSidebar } = useSidebarContext()

  const handleSidebarOpen = () => {
    setSidebar(true)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <GiHamburger className='sm:hidden h-8 w-8' />
          <p className='hidden sm:block select-none'>Burger Junkie</p>
        </LeftSection>
        <MidSection>
          <NavLink to='/'>
            <GiHamburger className='spin' />
          </NavLink>
        </MidSection>
        <RightSection>
          <Navigation>
            <NavItem />
          </Navigation>
        </RightSection>
        <div
          role='button'
          tabIndex='0'
          className='text-blue-100 hover:text-blue-400 sm:hidden'
          onClick={handleSidebarOpen}
          onKeyPress={handleSidebarOpen}
          aria-label='hamburger button'
        >
          <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24'>
            <path
              fillRule='evenodd'
              d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
            />
          </svg>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
