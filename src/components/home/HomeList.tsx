import React from 'react'
import { ProductData } from '../../interfaces/Api'
import { Group, Image, SimpleGrid, Space, Text } from '@mantine/core'
import { Button, Card } from '../shared'
import { useNavigate } from 'react-router-dom'
import Badge from '../shared/ui/Badge'

interface HomeListProps {
  data: ProductData[]
}

function HomeList({
  data
}: HomeListProps) {
  const navigate = useNavigate()

  const handleDetail = (id: number) => {
    navigate(`/product/detail/${id}`)
  }

  return (
    <SimpleGrid
      cols={2}
      spacing='lg'
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' }
      ]}
      sx={{
        width: '100%'
      }}
    >
      {data?.length > 0 && (
        data?.map((value, index) => (
          <Card
            key={index}
            style={{
              maxWidth: '100%'
            }}
            shadow='sm'
            withBorder
            p='lg'
            radius='md'
          >
            <Image
              src={value.image}
              height={160}
              alt='Norway'
            />
            <Group
              spacing='xl'
              position='apart'
              mt={20}
            >
              <Text
                size='md'
                sx={{
                  width: '60%'
                }}
              >
                {value.title}
              </Text>
              <Badge
                text='heloo'
              />
              <Text
                size='sm'
                lineClamp={3}
              >
                {value.description}
              </Text>
            </Group>
            <Space
              mb={20}
            />
            <Button
              text='Detail'
              variant='filled'
              onClick={() => { handleDetail(value.id) }}
              fullWidth
            />
          </Card>
        ))
      )}
    </SimpleGrid>
  )
}

export default HomeList