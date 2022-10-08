import ProductDetailComponent from '@/components/product/detail/ProductDetailComponent'
import { useProductStore } from '@/store/product/productStore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { QueryParamsTypes } from '@/interfaces/Route'

function ProductDetailContainer() {
  const productStore = useProductStore()
  // const { id }: Params = productStore.detail
  const { id } = useParams() as QueryParamsTypes

  useEffect(() => {
    productStore.getDetailProduct(id)
  }, [id])

  return (
    <ProductDetailComponent
    // detail={detail}
    />
  )
}

export default ProductDetailContainer