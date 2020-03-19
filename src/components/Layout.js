import React from 'react'
import Nav from './Nav'
import Sidenav from './Nav/Sidenav'
import Footer from './Footer'
import {AppHeader, AppMain, MainWrapper, AppFooter} from './styles'

export default function Layout({children}) {
    return (
        <>
            <AppHeader>
                <Nav />
            </AppHeader>

            <Sidenav />

            <AppMain>
                <MainWrapper>
                    {children}
                </MainWrapper>
            </AppMain>

            <AppFooter>
                <Footer />
            </AppFooter>
        </>
    )
}
