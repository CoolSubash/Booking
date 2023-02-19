import React from 'react'
import SingleOffer from './SingleOffer'
import './offer.css'
import offerdata from './Offer.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Offer() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <div className="offer">
        <div className="offer-container">
          <div className="offer-heading">
            <h1>Offers</h1>
            <p>Promotions, deals, and special offers for you</p>
          </div>
        </div>
        <Carousel responsive={responsive}>
          {offerdata.map((value, index) => {
            return (
              <SingleOffer
                key={index}
                title={value.title}
                description={value.description}
                offerbtn={value.offerbtn}
                background={value.background}
              />
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default Offer
