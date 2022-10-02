import React, { useEffect, useState } from 'react'
import HomeComponent from '../components/home/HomeComponent'
import { fetchData } from '../store/action/Home'

function HomeContainer() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <HomeComponent
      data={data}
    />
  )
}

export default HomeContainer