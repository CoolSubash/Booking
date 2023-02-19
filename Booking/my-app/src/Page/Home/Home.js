import React from 'react'

import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import Homebody from '../../Component/HomeBody/Homebody'
import Search from '../../Component/Search/Search'
import Offer from '../../Component/Offer/Offer'
import Property from '../../Component/Poroperty/Property'

import Explore from '../../Component/Explore/Explore'
import Signup from '../../Component/SignUp/Signup'
import Footer from '../../Footer/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Homebody />
      <Search />
      <Offer />
      <Property />
      <Explore />
      <Signup />
      <Footer />
    </>
  )
}

export default Home
