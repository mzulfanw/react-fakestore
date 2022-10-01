import React from 'react'
import { Navigate } from 'react-router-dom'

interface privateRouteProps {
  children?: JSX.Element | React.ReactElement
}

function PrivateRoute({
  children
}: privateRouteProps) {
  const checkToken = window.localStorage.getItem('token')

  if (checkToken === null) {
    return <Navigate to='/' replace />
  }

  return <>{children}</>

}

export default PrivateRoute