import { useState,useEffect } from 'react'
import Hero from '/src/Components/Hero/Hero'
import Specialties from '/src/Components/Specialties/Specialties'
import Tips from '/src/Components/Tips/Tips'
import About from '/src/Components/About/About'
import Footer from '/src/Components/Footer/Footer'

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

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