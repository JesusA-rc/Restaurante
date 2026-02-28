import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '/src/config.js';
import styles from './Menu.module.css'
import Header from '/src/Components/Header/Header'
import { NavLink } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { useOnScreen } from "/src/Components/useOnScreen/useOnScreen";
import PropTypes from 'prop-types';

const CategoryItem = ({ item }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  return (
    <div 
      ref={ref} 
      className={`${styles.foodItem} ${hasBeenVisible ? styles.visible : ""}`}
    >
        <NavLink to={`/menucomidas?id_category=${item.id_category}`} className="navlink">
            <img src={item.image_url} alt={item.name_category} />
            <span>{item.name_category}</span>
        </NavLink>
    </div>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.shape({
    id_category: PropTypes.number.isRequired,
    name_category: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

const Menu = () => {
  const { data: categoriesData, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchData('/api/categories'),
  });

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  if (isLoading) return <div className={styles.loading}>Cargando categorías...</div>;
  if (isError) return <div className={styles.error}>Error al cargar el menú</div>;

  return (
  <>
    <Header typeNavegation="NavLink" />
    <div className={styles.menu}>
        <div className={styles.types_food}>
            {categoriesData?.map((item) => (
              <CategoryItem key={item.id_category} item={item} />
            ))}
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Menu
