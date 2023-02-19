import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import {
  faBed,
  faCalendarDays,
  faPersonWalkingLuggage,
} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import './search.css'
function Search() {
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [dateOpen, setdateOpen] = useState(false)
  const [guest, setguest] = useState(false)

  const [bookroom, setbookroom] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleClickGuest = (name, check) => {
    setbookroom((prev) => {
      return {
        ...prev,
        [name]: check === 'i' ? bookroom[name] + 1 : bookroom[name] - 1,
      }
    })
  }
  const [place, setplace] = useState('')
  const navigate = useNavigate()
  const handleplace = (e) => {
    setplace(e.target.value)
  }
  const searchtype = () => {
    if (place.length < 3) {
      alert('Please Enter a Place')
    } else {
      navigate('/hotels', { state: { date, bookroom, place } })
    }
  }

  return (
    <>
      <div className="search">
        <div className="search-container">
          <div className="searchcontainerItem1">
            <FontAwesomeIcon
              icon={faBed}
              className="searchIcon"
            ></FontAwesomeIcon>
            <input
              type="text"
              placeholder='"Where are you going ?'
              className="headerSearchInput"
              value={place}
              onChange={handleplace}
            />
          </div>
          <div className="searchcontainerItem datepickerSearch">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="searchIcon calendar"
              onClick={() => {
                setdateOpen(!dateOpen)
              }}
            ></FontAwesomeIcon>
            <span className="checkIn">{`${format(
              date[0].startDate,
              'MM/dd/yyyy',
            )}`}</span>
            <span className="checkout">{`${format(
              date[0].endDate,
              'MM/dd/yyyy',
            )}`}</span>

            {dateOpen && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="searchcontainerItem">
            <FontAwesomeIcon
              icon={faPersonWalkingLuggage}
              className="searchIcon"
            ></FontAwesomeIcon>
            <span
              onClick={() => setguest(!guest)}
              className="personCheck"
            >{`${bookroom.adult} Adult ${bookroom.children} Children ${bookroom.room} Room`}</span>

            {guest && (
              <div className="guestNumber">
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
          <div className="search">
            <span onClick={() => searchtype()} className="searchplace">
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
