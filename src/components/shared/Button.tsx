import React from 'react'
import { Button as MantineButton, Sx } from '@mantine/core'


type Variant = 'gradient' | 'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | undefined

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  variant: Variant,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  sx?: Sx
}

function Button({
  text,
  onClick,
  variant,
  ...props
}: ButtonProps) {
  return (
    <MantineButton
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {text}
    </MantineButton>
  )
}

export default Button