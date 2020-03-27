import React, { useEffect } from 'react'
import { Redirect } from '@reach/router'
import { useAuthDispatch } from '../../context/AuthContext'

export default function Logout () {
  const { logout } = useAuthDispatch()

  useEffect(() => {
    logout()
  }, [logout])

  return <Redirect to='/' noThrow />
}
