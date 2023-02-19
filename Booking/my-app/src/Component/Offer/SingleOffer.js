import React from 'react'
import './singleoffer.css'
function SingleOffer({ title, description, offerbtn, background }) {
  return (
    <>
      <div className="singleoffer">
        <div className="singleoffer-container">
          <div className="singleoffer-text">
            <div className="singleoffer-image">
              <img src={background} alt="" />
            </div>
            <div className="singleofferContent">
              <h1>{title}</h1>
              <p>{description}</p>
              <button className="singleoffer-btn">{offerbtn}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleOffer
