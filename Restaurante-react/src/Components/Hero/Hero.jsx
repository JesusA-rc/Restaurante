import React from 'react'
import styles from './Hero.module.css'
import Header from '../Header/Header'
import tacospastor from '/src/assets/tacospastor.jpg'
import orangechicken from '/src/assets/orangechicken.jpg'
import sushi from '/src/assets/sushi.jpg'
import dragon from '/src/assets/dragon.png'
import takoyaki from '/src/assets/takoyaki.jpg'

const Hero = () => {
  return (
    <div className={styles.hero} id='home'>
      <div className={styles.left_h}>
        <Header typeNavegation="Link"></Header>
        <div className={styles.hero_text}>
          <span className={styles.main_text}>Flavors for your</span>
          <span className={styles.sub_text}>palate</span>
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam maxime, doloremque deserunt illum, rem odio delectus magni nulla, laboriosam reprehenderit accusantium eum? Explicabo deserunt quo cupiditate molestiae praesentium, voluptatem fugiat!
          </span>
          <div className={styles.gomenu}>
            <span>Explore our menu</span>
          </div>
          <div className={styles.offers}>
            <div>
              <img src={tacospastor} alt="tacos pastor" />
              <span>Tacos pastor</span>
              <span>$ 8</span>
            </div>
            <div>
              <img src={orangechicken} alt="orange chicken" />
              <span>Orange chicken</span>
              <span>$ 12</span>
            </div>
            <div>
              <img src={sushi} alt="sushi" />
              <span>Sushi</span>
              <span>$ 10</span>
            </div>
            <div>
              <img src={takoyaki} alt="sushi" />
              <span>takoyaki</span>
              <span>$ 6.5</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_h}>
        <img src={dragon} className={styles.food_main_img} alt="" />
      </div>
    </div>
  )
}

export default Hero