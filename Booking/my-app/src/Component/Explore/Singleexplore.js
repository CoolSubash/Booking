import React from 'react'

function Singleexplore({ image, title, numbertitle }) {
  return (
    <div className="singleexplore">
      <div className="singleexplore-image">
        <img src={image} alt="" />
      </div>
      <div className="singleexplore-text">
        <h1>{title}</h1>
        <p>{numbertitle} </p>
      </div>
    </div>
  )
}

export default Singleexplore
