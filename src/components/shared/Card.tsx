import React from 'react'
import { Card as MantineCard } from '@mantine/core'


interface Card {
  children: React.ReactNode
}

function Card({
  children
}: Card) {
  return (
    <MantineCard>
      {children}
    </MantineCard>
  )
}

export default Card