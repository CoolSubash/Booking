import React from 'react'
import {
  faBed,
  faCar,
  faHotel,
  faPlaneCircleCheck,
  faSnowflake,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
function Header() {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerlist">
            <div className="headerListItem headerListItemactive">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlaneCircleCheck} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faHotel} />
              <span>Flights + Hotel</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faSnowflake} />
              <span>Attraction</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxi</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
