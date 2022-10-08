import React from 'react'
import { ProductData } from '../../interfaces/Api'
import { Group, Image, SimpleGrid, Text } from '@mantine/core'
import { Card } from '../shared'
import Badge from '../shared/ui/Badge'

interface HomeListProps {
  data: ProductData[]
}

function HomeList({
  data
}: HomeListProps) {
  return (
    <SimpleGrid
      cols={2}
      spacing='lg'
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' }
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
          </Card>
        ))
      )}
    </SimpleGrid>
  )
}

export default HomeList