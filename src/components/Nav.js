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
import '../assets/custom-utilities.css'

export default function Nav() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <LeftSection>
            <NavLink className="block" to="/">
              <p>Burger Junkie</p>
            </NavLink>
          </LeftSection>
          <MidSection>
            <NavLink to="/">
              <GiHamburger className="spin" />
            </NavLink>
          </MidSection>
          <RightSection>
            <Navigation>
              <NavLink
                className="block flex items-center hover:text-gray-700 mr-5"
                to="order"
              >
                Order
              </NavLink>
              <NavLink
                className="block flex items-center hover:text-gray-700 mr-5"
                to="checkout"
              >
                Checkout
              </NavLink>
              <NavLink
                className="block flex items-center hover:text-gray-700"
                to="login"
              >
                Login
              </NavLink>
            </Navigation>
          </RightSection>
          <button
            type="button"
            className="text-blue-100 hover:text-blue-400 sm:hidden"
            aria-label='Hamburger Menu'
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </HeaderContainer>
      </HeaderWrapper>
    )
}
