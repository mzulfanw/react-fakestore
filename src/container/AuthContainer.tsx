import React from 'react'
import AuthComponent from '../components/auth/AuthComponent'

function AuthContainer() {

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target)
    console.log(event.currentTarget)
  }

  return (
    <AuthComponent
      handleLogin={handleLogin}
    />
  )
}

export default AuthContainer