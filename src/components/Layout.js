import React from 'react'
import Toolbar from './Navigation/Toolbar'
import Sidebar from './Navigation/Sidebar'
import Footer from './Footer'
import {AppHeader, AppMain, MainWrapper, AppFooter} from './styles'

export default function Layout({children}) {
    return (
        <>
            <AppHeader>
                <Toolbar />
            </AppHeader>

            <Sidebar />

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
