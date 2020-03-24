import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled/macro'
import tw from 'tailwind.macro'

export const HeaderWrapper = tw.div`
  w-full max-w-screen-xl relative items-center mx-auto
`

export const HeaderContainer = tw.div`
  flex items-center justify-between text-blue-100
`

export const LeftSection = tw.div`
  w-1/3
`

export const MidSection = tw.div`
  hidden lg:w-1/3 justify-center py-3 xl:flex
`

export const RightSection = tw.div`
  w-1/3
`

export const Navigation = tw.div`
  hidden sm:flex justify-end items-center text-blue-100
`

export const NavLink = styled(({ ...props }) => <Link {...props} />)`
  ${props => props.right && 'bg-red-600'}
`
