import React from 'react';
import TemplateComponent1 from './test/BasicMap';
import Nav1 from '../components/Nav1/Nav1';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
    <div className="" style={{height:"max-content"}}>
    <Nav1 />
      <div className="heroSection">
        <img src="/hero.svg" alt="" srcset="" />
        <h1 className="heading">
          "The journey not the arrival matters." - T.S. Eliot
        </h1>
      </div>
      <div className="subContents">
        <div className="map">
          <TemplateComponent1 />
        </div>
        <div className="data">
          <h1 className="subHeading">What We Offers?</h1>
          <p>
            Our project is designed to empower users with a comprehensive set of
            features aimed at enhancing their travel experience. By harnessing
            real-time traffic information, our platform ensures that users stay
            informed about traffic conditions, enabling them to make informed
            decisions and choose the most optimized routes for their journeys.
            Beyond traffic updates, our project also offers valuable suggestions
            for places to visit along the way, transforming a simple commute
            into a memorable adventure.
          </p>
          <br />
          <br />
          <p>
            But we don't stop there. Our commitment to sustainability and
            convenience is reflected in our carpooling feature, which encourages
            users to share rides, reducing both traffic congestion and their
            carbon footprint. To facilitate seamless transactions and bookings,
            we have implemented a secure payment gateway, allowing users to make
            payments and reservations effortlessly. Our project isn't just about
            travel; it's about redefining the way people experience and navigate
            the world, all while prioritizing efficiency, sustainability, and
            user convenience.
          </p>
        </div>
      </div>
      {/* <Footer/> */}

    </div>
     
    </>
  );
};

export default Home;
