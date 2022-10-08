import React from 'react'
import { Card as MantineCard, CardProps } from '@mantine/core'


interface Card extends CardProps {
  children: React.ReactNode
}

function Card({
  children,
  ...props
}: Card) {
  return (
    <MantineCard
      {...props}
    >
      {children}
    </MantineCard>
  )
}

export default Card