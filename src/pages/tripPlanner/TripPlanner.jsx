import React from 'react'
import Nav from '../../components/Nav/Nav'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import { data } from '../../data'

const TripPlanner = () => {
  return (
    <>
    <Nav/>
    <div className="content">
{
    data.map((element)=>(
<Card key={element.key} cityImg={element.image} cityName={element.city} cityData={element.about}/> 
    ))
}
       
    </div>
    <Footer/>
    </>
  )
}

export default TripPlanner