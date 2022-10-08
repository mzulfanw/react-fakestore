import React from 'react'
import { Skeleton as MantineSkeleton } from '@mantine/core'



function Skeleton() {
  return (
    <>
      <MantineSkeleton height={8} mt={6} width='70%' radius='xl' />
    </>
  )
}

export default Skeleton