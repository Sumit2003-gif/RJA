import React from 'react'
import HomeServices from '../components/HomeServices'
import HomeCard from '../components/HomeCard'
import HomeTeam from '../components/HomeTeam'
import HomeTestimonial from '../components/HomeTestimonial'
import HomeNews from '../components/HomeNews'
import ContactDiv from '../components/ContactDiv'
import HomeHero1 from '../components/HomeHero1'
import HomeLocal from '../components/HomeLocal'
import HomeBlog from '../components/HomeBlog'
const Home = () => {
  return (
    <div>
      <HomeHero1/>
      <HomeLocal/>
      <HomeServices />  <HomeTestimonial />
      <HomeTeam />
      <HomeNews/>
      <ContactDiv/>
      <HomeBlog/>
    </div>
  )
}

export default Home
