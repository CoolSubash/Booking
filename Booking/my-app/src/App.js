import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home/Home'

import HotelList from './Page/HotelList/List'
import SingleHotel from './Page/SigleHotel/SingleHotel'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'hotels',
    element: <HotelList />,
  },
  {
    path: 'hotels/:id',
    element: <SingleHotel />,
  },
])
export default router
