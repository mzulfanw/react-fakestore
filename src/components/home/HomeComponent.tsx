/* eslint-disable no-unused-vars */
import { Space } from '@mantine/core'
import React from 'react'
import { ProductData } from '../../interfaces/Api'
import Layout from '../core/Layout'
import HomeList from './HomeList'
import HomeToolbar from './HomeToolbar'

interface HomeProps {
  data: ProductData[],
  handleOnLimit: (limit: string) => void,
  handleOnSort: (sort: string) => void,
  queries: {
    sort: string,
    limit: string
  }
}

function HomeComponent({
  data,
  handleOnLimit,
  handleOnSort,
  queries
}: HomeProps) {
  return (
    <Layout>
      <HomeToolbar
        handleOnLimit={handleOnLimit}
        handleOnSort={handleOnSort}
        queries={queries}
      />
      <Space mb={10} />
      <HomeList
        data={data}
      />
    </Layout>
  )
}

export default HomeComponent