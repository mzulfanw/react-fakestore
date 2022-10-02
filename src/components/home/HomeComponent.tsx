import React from 'react'

interface HomeProps {
  data: never[]
}

function HomeComponent({
  data
}: HomeProps) {
  console.log(data)
  return (
    <p>test</p>
  )
}

export default HomeComponent