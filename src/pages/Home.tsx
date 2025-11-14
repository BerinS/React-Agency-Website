import HeroContentLeft from '../components/HeroContentLeft';
import FeaturesCards from '../components/FeaturesCards';
import StatsGroup from '../components/StatsGroup';
import AboutBanner from '../components/AboutUs';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

function Home() {
  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  })

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
    
  return (
    <>
      <HeroContentLeft />
      <FeaturesCards />
      <StatsGroup />
      <div id='About'>
        <AboutBanner />
      </div>
      
    </>    
  )
}

export default Home;