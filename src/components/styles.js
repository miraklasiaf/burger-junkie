import tw from 'tailwind.macro'

/*
 * Header Section
 */
export const AppHeader = tw.header`
  bg-blue-700 w-full h-16 px-4 py-2 flex justify-center items-center border-b border-blue-500 fixed z-100 top-0 inset-x-0
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

/*
 * Sidenav
 */

/*
 * Footer Section
 */
export const AppFooter = tw.footer`
  w-full flex flex-col items-center
`
