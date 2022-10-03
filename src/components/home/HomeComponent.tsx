import React from 'react'
import { ProductData } from '../../store/product/productStore'
import Layout from '../core/Layout'
import HomeList from './HomeList'

interface HomeProps {
  data: ProductData[]
}

function HomeComponent({
  data
}: HomeProps) {
  return (
    <Layout>
      <HomeList
        data={data}
      />
    </Layout>
  )
}

export default HomeComponent