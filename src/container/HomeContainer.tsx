import React, { useEffect } from 'react'
import HomeComponent from '../components/home/HomeComponent'
import { useProductStore } from '../store/product/productStore'

function HomeContainer() {
  const productStore = useProductStore()
  const product = productStore.product

  useEffect(() => {
    productStore.getProduct()
  }, [])

  return (
    <HomeComponent
      data={product}
    />
  )
}

export default HomeContainer