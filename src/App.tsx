import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Button } from './components/shared'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Button
        text='heloo'
        onClick={() => { alert('heloo there') }}
        variant='filled'
      />
    </MantineProvider>

  )
}

export default App