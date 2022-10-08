import { Container } from '@mantine/core'
import React from 'react'
// import Header from './Header'
// import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({
  children
}: LayoutProps) {
  return (
    <>
      <Container
      >
        {/* Your application here */}
        {children}
        {/* <Header /> */}
        {/* End Aplication */}
      </Container>
    </>
  )
}

export default Layout