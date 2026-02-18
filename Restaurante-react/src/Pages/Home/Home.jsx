import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Hero from '/src/Components/Hero/Hero'
import Specialties from '/src/Components/Specialties/Specialties'
import Tips from '/src/Components/Tips/Tips'
import About from '/src/Components/About/About'
import Footer from '/src/Components/Footer/Footer'

export const Home = () => {
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
  }, [location]);

  return (
    <>
        <Hero></Hero>
        <Specialties></Specialties>
        <Tips></Tips>
        <About></About>
        <Footer></Footer>
  </>
  )
}

export default Home