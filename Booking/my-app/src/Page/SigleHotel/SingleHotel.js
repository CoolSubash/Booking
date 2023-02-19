import React from 'react'
import { useParams } from 'react-router'
import Describeleft from '../../Component/SingleDescribeHotel/Describeleft'
import Describeright from '../../Component/SingleDescribeHotel/Describeright'
import './SingleHotel.css'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import Footer from '../../Footer/Footer'
import {
  faDumbbell,
  faParking,
  faPersonSwimming,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SingleHotel() {
  const params = useParams()
  console.log(params)

  return (
    <>
      <Navbar />
      <Header />
      <div className="singlehotel-describe" style={{ marginBottom: 30 + 'px' }}>
        <div className="singlehotel-describe-container">
          <div className="singlehotel-describe-left">
            <Describeright />
            <div className="singlehotel-description">
              <h1>Description</h1>
              <p style={{ marginTop: 20 + 'px' }}>
                Tidewater Condo with Golf Access 3 Mi to Beach is located in the
                North Myrtle Beach district of North Myrtle Beach, 9.4 miles
                from Barefoot Resort Norman Golf Course, 9.5 miles from Barefoot
                Landing and 10 miles from Aberdeen Country Club. The property is
                8.9 miles from the Alabama Theater and has free WiFi throughout
                the property.
                <br></br>This apartment is equipped with 2 bedrooms, a living
                room and a fully equipped kitchen with a fridge and an oven.
                Towels and bed linen are available in the apartment.<br></br>{' '}
                Carolina Opry Theater is 13 miles from the apartment, while
                Myrtle Beach Boardwalk is 20 miles from the property. The
                nearest airport is Myrtle Beach International Airport, 29 miles
                from Tidewater Condo with Golf Access 3 Mi to Beach. Tidewater
                Condo with Golf Access 3 Mi to Beach has been welcoming
                Booking.com guests since Mar 22, 2022 Distance in property
                description is calculated using © OpenStreetMap
              </p>
            </div>
            <div className="singlehotel-amenties">
              <h1 style={{ marginTop: 20 + 'px' }}>Most Popular</h1>
              <div style={{ marginTop: 20 + 'px' }} className="amenties-list">
                <div className="amenties-list-item">
                  <FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon>
                  <p>Outdoor swimming pool</p>
                </div>
                <div className="amenties-list-item">
                  <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>
                  <p>Free Wifi</p>
                </div>
                <div className="amenties-list-item">
                  <FontAwesomeIcon icon={faParking}></FontAwesomeIcon>
                  <p>Parking</p>
                </div>
                <div className="amenties-list-item">
                  <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                  <p>Fitness</p>
                </div>
              </div>
            </div>
          </div>
          <div className="singlehotel-describe-right">
            <Describeleft />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleHotel
