import styles from './Footer.module.css'
import { Link } from "react-scroll";
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className={styles.footer}>
        <ul className={styles.footer_menu}>
        <li>
          {isHomePage ? (
            <Link to='home' spy={true} smooth={true}>Home</Link>
          ) : (
            <NavLink to="/home#home" className={styles.footer_navlink}>Home</NavLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <Link to='specialties' spy={true} smooth={true}>Specialties</Link>
          ) : (
            <NavLink to="/home#specialties" className={styles.footer_navlink}>Specialties</NavLink>
          )}
        </li>
        <li><NavLink to="/menu" className={styles.footer_navlink}>Menu</NavLink></li>
        <li>
          {isHomePage ? (
            <Link to='about' spy={true} smooth={true}>About us</Link>
          ) : (
            <NavLink to="/home#about" className={styles.footer_navlink}>About us</NavLink>
          )}
        </li>
        </ul>
        <div className={styles.footer_copyright}>
            &copy; {new Date().getFullYear()} Restaurante. All rights reserved.
        </div>
    </div>
  )
}

export default Footer