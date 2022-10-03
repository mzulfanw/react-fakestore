import React from 'react'
import { Badge as MantineBadge, BadgeProps } from '@mantine/core'

interface Badge extends BadgeProps {
  text: string,
}


function Badge({
  text,
  ...other
}: Badge) {
  return (
    <MantineBadge
      {...other}
    >
      {text}
    </MantineBadge>
  )
}

export default Badge