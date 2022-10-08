import React from 'react'
import { Select as MantineSelect } from '@mantine/core'
import { SelectProps } from '@/interfaces/Component'

function Select({
  label,
  placeholder,
  data,
  ...props
}: SelectProps) {
  return (
    <MantineSelect
      label={label}
      placeholder={placeholder}
      data={data}
      {...props}
    />
  )
}

export default Select