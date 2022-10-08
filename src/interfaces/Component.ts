import { SelectProps as MantineSelectProps } from '@mantine/core'

export interface SelectProps extends MantineSelectProps {
  label: string,
  placeholder?: string,
}