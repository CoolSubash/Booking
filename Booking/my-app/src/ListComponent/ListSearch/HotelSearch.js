import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import './hotelsearch.css'
function HotelSearch() {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.place)
  const [date, setdate] = useState(location.state.date)

  const [dateOpen, setdateOpen] = useState(false)
  const [bookroom, setbookroom] = useState(location.state.bookroom)
  const [guest, setguest] = useState(false)

  const handleClickGuest = (name, check) => {
    setbookroom((prev) => {
      return {
        ...prev,
        [name]: check === 'i' ? bookroom[name] + 1 : bookroom[name] - 1,
      }
    })
  }
  const handleSearchlist = (e) => {
    setDestination(e.target.value)
  }

  return (
    <>
      <div className="hotelSearch">
        <div className="hotelsearch-container">
          <div className="hotel-text">
            <div className="hotelsearch-heading">
              <h1>Search</h1>
            </div>
            <div className="hotelsearch-destination">
              <p style={{ marginTop: 10 + 'px' }}>Destination</p>
              <form action="">
                <input
                  type="text"
                  id="hotelsearch-destination"
                  placeholder="Search here"
                  value={destination}
                  onChange={handleSearchlist}
                />
              </form>
            </div>
            <div className="hotelsearchcontainerItem datepickerhotelSearch">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="searchIcon calendar"
                onClick={() => {
                  setdateOpen(!dateOpen)
                }}
              ></FontAwesomeIcon>
              <span className="hotel-checkIn">{`${format(
                date[0].startDate,
                'MM/dd/yyyy',
              )}`}</span>
              <span style={{ marginLeft: 8 + 'px' }}>to</span>
              <span className="hotel-checkout">{`${format(
                date[0].endDate,
                'MM/dd/yyyy',
              )}`}</span>

              {dateOpen && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setdate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="hotelSearch-date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="hotelsearchcontainerItem">
              <FontAwesomeIcon
                icon={faPerson}
                className="searchIcon"
              ></FontAwesomeIcon>
              <span
                onClick={() => setguest(!guest)}
                className="personCheck"
              >{`${bookroom.adult} Adult ${bookroom.children} Children ${bookroom.room} Room`}</span>

              {guest && (
                <div className="hotel-guestNumber">
                  <div className="guestNumberItems">
                    <span className="adult">Adult</span>
                    <div>
                      <button
                        className="guestIncrease"
                        onClick={() => handleClickGuest('adult', 'i')}
                      >
                        +
                      </button>
                      <span className="guestText">{`${bookroom.adult}`}</span>
                      <button
                        disabled={bookroom.adult <= 1}
                        className="guestDecrease"
                        onClick={() => handleClickGuest('adult', 'd')}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="guestNumberItems">
                    <span className="children">Children</span>
                    <div>
                      <button
                        className="guestIncrease"
                        onClick={() => handleClickGuest('children', 'i')}
                      >
                        +
                      </button>
                      <span className="guestText">{`${bookroom.children}`}</span>
                      <button
                        disabled={bookroom.children <= 0}
                        className="guestDecrease"
                        onClick={() => handleClickGuest('children', 'd')}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="guestNumberItems">
                    <span className="room">Room</span>
                    <div>
                      <button
                        className="guestIncrease"
                        onClick={() => handleClickGuest('room', 'i')}
                      >
                        +
                      </button>
                      <span className="guestText">{`${bookroom.room}`}</span>
                      <button
                        disabled={bookroom.room <= 1}
                        className="guestDecrease"
                        onClick={() => handleClickGuest('room', 'd')}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hotelsearch-btn">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelSearch
