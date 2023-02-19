import React from 'react'
import './describeleft.css'
function Describeleft() {
  const mapStyle = {
    height: '350px',
    style: 'border:0;',
    allowfullscreen: '',
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
  }
  return (
    <>
      <div className="dleft">
        <div className="dleft-container">
          <div className="dleft-showmap">
            <iframe
              style={mapStyle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106194.49412997099!2d-78.94884828517692!3d33.7198685201064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1676492810617!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="dleft-price">
            <div className="dleft-days">
              <div className="dleft-days-btn">
                <button className="btn-inc">+</button>
                <h1>9 Days</h1>
                <button className="btn-dec">-</button>
              </div>
              <h1 style={{ marginLeft: 6 + 'px', marginTop: 8 + 'px' }}>
                Price: $900
              </h1>
              <button className="dleft-checkout">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Describeleft
