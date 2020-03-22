import React, { useEffect } from 'react'
import { Redirect } from '@reach/router'
import { useAuthContext } from '../../context/AuthContext'

export default function Logout () {
    const { logout } = useAuthContext()

    useEffect(() => {
        logout()
    }, [logout])

    return <Redirect to="/" noThrow />
}
