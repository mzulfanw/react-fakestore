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
        size='sm'
        sx={{
          border: '5px solid #AED9E0',
          margin: '20px auto',
          borderRadius: '10px',
          minHeight: '100vh'
        }}
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