import React from 'react'
import styles from './Footer.module.css'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul className={styles.footer_menu}>
        <li>
          <Link to='home' spy={true} smooth={true}>Home</Link></li>
        <li>
          <Link to='specialties' spy={true} smooth={true}>Specialties</Link>
        </li>
        <li>Menu</li>
        <li>
          <Link to='about' spy={true} smooth={true}>About us</Link>
        </li>
        </ul>
    </div>
  )
}

export default Footer