import React from 'react'
import './property.css'
function SingleProperty({ title, numbertitle, image }) {
  return (
    <>
      <div className="singleproperty">
        <div className="singleproperty-image">
          <img src={image} alt="" />
        </div>
        <div className="singleproperty-text">
          <h1>{title}</h1>
          <p>{numbertitle} </p>
        </div>
      </div>
    </>
  )
}

export default SingleProperty
