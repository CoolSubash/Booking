import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './hotellist.css'
function SingleHotelList() {
  const [color, setcolor] = useState('white')
  const [colorheart, setcolorheart] = useState('white')
  const changeColorheart = () => {
    colorheart === 'white' ? setcolorheart('red') : setcolorheart('white')
  }
  const changeColor = () => {
    color === 'white' ? setcolor('skyblue') : setcolor('white')
  }
  const linkstyle = {
    textDecoration: 'none',
    color: 'white',
  }
  const subash = 'neupane'
  return (
    <>
      <div className="singlehotel-list" style={{ background: color }}>
        <div className="singlehotel-list-container">
          <div className="singlehotel-list-image">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/347669593.webp?k=77745b0e56545b06e37b9f0904ce9078a7f9a8e69bf605d02a59538dfcdbd674&o=&s=1"
              alt=""
            />
            <div className="logo">
              <FontAwesomeIcon
                onClick={changeColorheart}
                style={{ color: colorheart }}
                icon={faHeart}
              />
            </div>
          </div>
          <div className="singlehotel-list-text">
            <div className="singlehotel-list-title">
              <h1>Subash Neupane</h1>
            </div>
            <div className="singlehotel-list-description" onClick={changeColor}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
                libero magni cumque alias in earum tenetur doloremque nemo
                consequatur minus asperiores exercitationem voluptatum unde
                sequi quod veritatis aperiam? Sapiente, consequuntur?
              </p>
            </div>
            <div className="singlehotel-list-price">
              <button id="showprice">
                <Link to={`/hotels/${subash}`} style={linkstyle}>
                  View More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleHotelList
