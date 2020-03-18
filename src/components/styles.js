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
  bg-blue-800 w-full h-16 px-4 py-2 flex justify-center items-center border-b border-blue-500 fixed z-100
`

export const HeaderWrapper = tw.div`
  w-full max-w-screen-xl relative items-center mx-auto
`

export const HeaderContainer = tw.div`
  flex items-center justify-between text-blue-100
`

export const LeftSection = tw.div`
  w-64
`

export const MidSection = tw.div`
  hidden lg:w-64 justify-center py-3 xl:flex
`

export const RightSection = tw.div`
  w-64
`

export const Navigation = tw.div`
  hidden sm:flex justify-end items-center text-blue-100
`

export const NavLink = styled(({ right, ...props }) => <Link {...props} />)`
  ${props => props.right && 'bg-red-600'}
`

/*
 * Main Section
 */
export const AppMain = tw.main`
  w-full flex flex-col items-center mt-16
`

export const MainWrapper = tw.div`
  bg-black w-full max-w-screen-xl
`

/*
 * Footer Section
 */
export const AppFooter = tw.footer`
  w-full flex flex-col items-center
`

export const FooterWrapper = tw.div`
  bg-blue-200 w-full max-w-screen-xl px-4 text-center
`