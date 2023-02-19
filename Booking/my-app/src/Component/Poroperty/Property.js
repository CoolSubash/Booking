import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import propertydata from './property.json'
import Singleproperty from './SingleProperty'
import './property.css'
function Property() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className="property">
        <div className="property-container">
          <div className="property-heading">
            <h1>Browse by property type</h1>
          </div>

          <div className="property-slider">
            <Carousel responsive={responsive}>
              {propertydata.map((value, index) => {
                return (
                  <Singleproperty
                    key={index}
                    title={value.title}
                    numbertitle={value.numbertitle}
                    image={value.image}
                  />
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Property
