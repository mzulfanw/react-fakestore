import React from 'react'
import { Select } from '@/components/shared'
import { Group } from '@mantine/core'

interface HomeToolbarProps {
  queries: {
    sort: string,
    limit: string
  },
  // eslint-disable-next-line no-unused-vars
  handleOnSort: (sort: string) => void,
  // eslint-disable-next-line no-unused-vars
  handleOnLimit: (limit: string) => void
}

function HomeToolbar({
  queries,
  handleOnSort,
  handleOnLimit
}: HomeToolbarProps) {
  return (
    <Group
      spacing='xl'
      grow
      position='center'
    >
      <Select
        label='Sort Produk'
        placeholder='Sort Produk berdasarkan desc atau asc'
        data={[
          { value: 'desc', label: 'Descending' },
          { value: 'asc', label: 'Ascending' }
        ]}
        onChange={(e: string) => { handleOnSort(e) }}
        name='sorting'
        value={queries.sort}
      />
      <Select
        label='Set Limit'
        placeholder='Set Limit Produk'
        data={[
          { value: '5', label: '5' },
          { value: '10', label: '10' },
          { value: '15', label: '15' }
        ]}
        name='limit'
        value={queries.limit}
        onChange={(e: string) => { handleOnLimit(e) }}
      />
    </Group>
  )
}

export default HomeToolbar