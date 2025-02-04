import React, { useState,useEffect } from 'react'
import { fetchData } from '/src/config.js';
import styles from './Menu.module.css'
import Header from '/src/components/Header/Header'
import { NavLink } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { useOnScreen } from "/src/Components/useOnScreen/useOnScreen";

const categoriesData = await fetchData('/api/categories');

const Menu = () => {
  const [visibleItems, setVisibleItems] = React.useState({});
  const handleVisibility = (id, isVisible) => {
    if (isVisible) {
        setVisibleItems((prev) => ({ ...prev, [id]: true }));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
  <>
    <Header typeNavegation="NavLink" />
    <div className={styles.menu}>
        <div className={styles.types_food}>
            {categoriesData.map((item) => {
                const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
                useEffect(() => {
                    handleVisibility(item.id_category, isVisible);
                }, [isVisible]);

                return (
                  <div ref={ref} key={item.id_category} className={`${styles.foodItem} ${visibleItems[item.id_category] ? styles.visible : ""}`}>
                      <NavLink to={`/menucomidas?id_category=${item.id_category}`} className="navlink">
                          <img src={item.image_url} alt="" />
                          <span>{item.name_category}</span>
                      </NavLink>
                  </div>
                );
            })}
        </div>
    </div>
    <Footer />
  </>

  )
}

export default Menu