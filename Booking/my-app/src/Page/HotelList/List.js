import React from 'react'
import HotelSearch from '../../ListComponent/ListSearch/HotelSearch'
import HotelList from '../../ListComponent/ListItem/Hotellist'
import './list.css'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
function list() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="list">
        <div className="list-container">
          <div className="list-container-left">
            <HotelSearch />
          </div>
          <div className="list-container-right">
            <HotelList />
          </div>
        </div>
      </div>
    </>
  )
}

export default list
