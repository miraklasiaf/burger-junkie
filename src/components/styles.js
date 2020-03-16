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
  bg-white w-full h-16 px-4 py-3 flex justify-center items-center border-b border-gray-500 fixed z-9999
`

export const HeaderWrapper = tw.div`
  w-full max-w-screen-xl relative items-center mx-auto
`

export const HeaderContainer = tw.div`
  flex items-center justify-between text-gray-700
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
  hidden sm:flex justify-end items-center text-gray-700
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
  w-full max-w-screen-xl
`

export const ContentWrapper = tw.div`
  bg-white min-h-screen w-full
`

/*
 * Footer Section
 */
export const AppFooter = tw.footer`
  bg-gray-900 w-full items-center text-center
`