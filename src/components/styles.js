import React from 'react'
import tw from 'tailwind.macro'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'

export const AppContainer = tw.div`
  flex flex-col items-center
`

/*
 * Header Section
 */
export const AppHeader = tw.header`
  flex bg-white w-full px-4 py-3 items-center border-b border-gray-200 h-16 top-0 inset-x-0 z-100 fixed
`

export const HeaderWrapper = tw.div`
   w-full max-w-screen-xl relative mx-auto px-6
`

export const HeaderContainer = tw.div`
  flex items-center -mx-6
`

export const LeftSection = tw.div`
  lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8
`

export const RightSection = tw.div`
  flex flex-grow lg:w-3/4 xl:w-4/5
`

export const MidNavContainer = tw.div`
  w-full flex justify-center items-center lg:px-6 xl:w-3/4 xl:px-12
`

export const RightNavContainer = tw.div`
  hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6
`

export const Navigation = tw.div`
  flex justify-start items-center text-gray-500
`

export const NavLink = styled(({ right, ...props }) => <Link {...props} />)`
  ${props => props.right && 'margin-left: auto;'}
`

/*
 * Main Section
 */
export const AppMain = tw.main`
  w-full max-w-screen-xl mx-auto px-6
`

export const MainWrapper = tw.div`
  lg:flex -mx-6
`

export const ContentWrapper = tw.div`
  min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5
`

export const ContentContainer = tw.div`
  pt-24 pb-16 lg:pt-28 w-full
`

/*
 * Footer Section
 */
export const AppFooter = tw.footer`
  bg-white w-full text-center pb-8
`