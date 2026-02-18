import {useState, useEffect} from 'react';
import styles from './Header.module.css';
import logoimg from '/src/assets/logoimg.jpg';
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({typeNavegation}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.header}>
      <div className={styles.restaurant_tittle_logo}>
        <img src={logoimg} alt="logo" className={styles.logo}/>
        <span>food</span>
      </div>

      <button className={styles.menu_toggle} onClick={handleMenuToggle}>
        {isMenuOpen ? 'X' : '☰'}
      </button>

      <ul className={`${styles.header_nav} ${isMenuOpen ? styles.active : ''}`}>
        <li>
          {
            typeNavegation === "Link" ? 
            <Link to='home' spy={true} smooth={true} onClick={()=> setIsMenuOpen(false)}>Home</Link>
            : <NavLink to="/home" className="navlink">Home</NavLink>
          }
          
        </li>
        {
          typeNavegation === "Link" ? 
          (<li>
            <Link to='specialties' spy={true} smooth={true} onClick={()=> setIsMenuOpen(false)}>Specialties</Link>
          </li>) : ''
        }

        {
          typeNavegation === "Link"?
          (       
            <li>
              <Link to='about' spy={true} smooth={true} onClick={()=> setIsMenuOpen(false)}>About us</Link>
            </li>) : ''
        }
        <li><NavLink to="/menu" className="navlink">Menu</NavLink></li>
      </ul>
    </div>
  )
}

export default Header

Header.propTypes = {
  typeNavegation: PropTypes.string.isRequired,
};