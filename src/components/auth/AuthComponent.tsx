import { Container } from '@mantine/core'
import React from 'react'
import { Button, Card } from '../shared'

interface AuthProps {
  handleLogin: React.MouseEventHandler
}

function AuthComponent({
  handleLogin
}: AuthProps) {
  return (
    <Container

    >
      <Card
        shadow='sm'
      >
        <Button
          text='helo'
          variant='filled'
          onClick={handleLogin}
        />
        <input type='text' name='heloo' />
      </Card>
    </Container>
  )
}

export default AuthComponent