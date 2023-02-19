import React from 'react'
import { useLocation } from 'react-router'
import Pagination from '../../Component/Pagination/Pagination'
import './hotellist.css'
import SingleHotelList from './SingleHotelList'
function Hotellist() {
  return (
    <>
      <div className="hotel-list">
        <div className="hotel-list-container">
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <SingleHotelList />
          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotellist
