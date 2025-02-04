import React from 'react'
import styles from './About.module.css'
import {whyus} from '/src/Data/whyus.js'

const About = () => {
  return (
    <div className={styles.about} id='about'>
        <span>You're still on the fence? See why people choose us.</span>
        <div className={styles.grid_about}>
            <div className={styles.about_reasons}>
                <span>Authentic Flavor</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab porro fugit veritatis dolorum saepe consequatur? Consequatur, ullam deserunt laboriosam aliquam soluta, facere praesentium laudantium, velit est autem fugit hic?</span>
            </div>
            <div className={styles.about_reasons}>
                <span>Cozy Atmosphere</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab porro fugit veritatis dolorum saepe consequatur? Consequatur, ullam deserunt laboriosam aliquam soluta, facere praesentium laudantium, velit est autem fugit hic?</span>
            </div>
            <div className={styles.about_reasons}>
                <span>Exceptional Service</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab porro fugit veritatis dolorum saepe consequatur? Consequatur, ullam deserunt laboriosam aliquam soluta, facere praesentium laudantium, velit est autem fugit hic?</span>
            </div>
            <div className={styles.about_reasons}>
                <span>best chefs</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab porro fugit veritatis dolorum saepe consequatur? Consequatur, ullam deserunt laboriosam aliquam soluta, facere praesentium laudantium, velit est autem fugit hic?</span>
            </div>

            <img src={whyus[0].src} alt="" />
            <img src={whyus[1].src} alt="" />

            <img src={whyus[2].src} alt="" />
            <img src={whyus[3].src} alt="" />
        </div>
    </div>
  )
}

export default About