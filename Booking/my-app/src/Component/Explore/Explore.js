import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import exploredata from './explore.json'
import Singleexplore from './Singleexplore'
import './explore.css'
function Explore() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <>
      <div className="explore">
        <div className="explore-container">
          <div className="explore-heading">
            <h1>Explore United States of America</h1>
            <p>These popular destinations have a lot to offer</p>
          </div>

          <div className="explore-slider">
            <Carousel responsive={responsive}>
              {exploredata.map((value, index) => {
                return (
                  <Singleexplore
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

export default Explore
