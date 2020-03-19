import React from 'react'
import { GiHamburger } from 'react-icons/gi'
import {
  HeaderWrapper,
  HeaderContainer,
  LeftSection,
  MidSection,
  RightSection,
  Navigation,
  NavLink,
} from './styles'
import '../../assets/custom-utilities.css'
import { useGlobalDispatch } from '../../context/GlobalState'

export default function Nav() {
  const { setSidenav } = useGlobalDispatch()
  console.log('NAV COMPONENT 1x RENDER')

  const _handleClick = () => {
    setSidenav(true)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <GiHamburger className="sm:hidden spin" />
          <p className="hidden select-none sm:block">Burger Junkie</p>
        </LeftSection>
        <MidSection>
          <NavLink to="/">
            <GiHamburger className="spin" />
          </NavLink>
        </MidSection>
        <RightSection>
          <Navigation>
            <NavLink
              className="block flex items-center hover:text-blue-300 mr-5"
              to="order"
            >
              Order
            </NavLink>
            <NavLink
              className="block flex items-center hover:text-blue-300 mr-5"
              to="checkout"
            >
              Checkout
            </NavLink>
            <NavLink
              className="block flex items-center hover:text-blue-300"
              to="auth"
            >
              Auth
            </NavLink>
          </Navigation>
        </RightSection>
        <div className="text-blue-100 hover:text-blue-400 sm:hidden" onClick={_handleClick}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
