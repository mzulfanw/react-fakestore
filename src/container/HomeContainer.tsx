import React, { useEffect, useState } from 'react'
import HomeComponent from '../components/home/HomeComponent'
import { useProductStore } from '../store/product/productStore'

function HomeContainer() {
  const productStore = useProductStore()
  const product = productStore.product

  const [queries, setQueries] = useState({
    limit: '5',
    sort: 'desc'
  })

  const handleOnLimit = (limit: string) => {
    setQueries({
      ...queries,
      limit: limit
    })
  }

  const handleOnSort = (sort: string) => {
    setQueries({
      ...queries,
      sort: sort
    })
  }

  useEffect(() => {
    productStore.getProduct(queries)
  }, [queries])

  return (
    <HomeComponent
      data={product}
      queries={queries}
      handleOnLimit={handleOnLimit}
      handleOnSort={handleOnSort}
    />
  )
}

export default HomeContainer