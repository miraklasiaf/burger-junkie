import React from 'react'
import { GiHamburger } from 'react-icons/gi'
import { 
    HeaderWrapper, 
    HeaderContainer, 
    LeftSection, 
    RightSection, 
    MidNavContainer,
    RightNavContainer, 
    Navigation,
    NavLink 
} from './styles'
import '../shared/custom-utilities.css'

export default function Nav() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <LeftSection>
            <NavLink className="block" to="/">
              <p>Burger Junkie</p>
            </NavLink>
          </LeftSection>
          <RightSection>
            <MidNavContainer>
              <NavLink className="block" to="/">
                <GiHamburger className="spin" />
              </NavLink>
            </MidNavContainer>
            <RightNavContainer>
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
            </RightNavContainer>
          </RightSection>
        </HeaderContainer>
      </HeaderWrapper>
    )
}
