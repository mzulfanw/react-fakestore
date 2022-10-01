import React from 'react'
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import { Container, Text } from '@mantine/core'
import { Button } from '../components/shared'

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }
  return (
    <Container
      fluid
      sx={{
        position: 'relative',
        height: '100vh'
      }}
    >
      <div style={{
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Text
          size='xl'
          align='center'
          sx={{
            fontSize: '5rem'
          }}
        >
          {isRouteErrorResponse(error) && error.status}
        </Text>
        <Text
          size='xl'
          align='center'
        >
          {isRouteErrorResponse(error) && error.statusText}
        </Text>
        <Button
          text='Back'
          variant='gradient'
          sx={{
            display: 'block',
            margin: '20px auto'
          }}
          onClick={handleBack}
        />
      </div>
    </Container>
  )
}

export default Error