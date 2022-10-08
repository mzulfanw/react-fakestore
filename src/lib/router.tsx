import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Error from '../pages/Error'
import Home from '../pages/Home'
import PrivateRoute from './privateRoute'
import Profile from '../pages/Profile'
import Auth from '../pages/Auth'
import Detail from '@/pages/product/Detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/product/detail/:id',
    element: <Detail />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/profile',
    // eslint-disable-next-line react/no-children-prop
    element: <PrivateRoute children={<Profile />} />
  }
])