import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navcontainer">
          <span className="logo">Booking</span>
          <div className="navItems">
            <div className="navButton">Register</div>
            <div className="navButton">Login</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
