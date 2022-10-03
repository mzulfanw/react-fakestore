import React from 'react'
import { ProductData } from '../../interfaces/Api'
import { Skeleton } from '../shared'

interface HomeListProps {
  data: ProductData[]
}

function HomeList({
  data
}: HomeListProps) {
  const loading = data.length === 0 ? true : false
  return (
    <>
      {
        loading ? (
          <Skeleton />
        ) : <p>test</p>
      }
    </>
  )
}

export default HomeList