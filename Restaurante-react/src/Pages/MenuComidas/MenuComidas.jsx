import React, {useEffect} from 'react';
import styles from './MenuComidas.module.css';
import Header from '/src/components/Header/Header';
import { useSearchParams,Navigate } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { fetchData } from '/src/config.js';
import { useOnScreen } from "/src/Components/useOnScreen/useOnScreen";

const foodsData =  await fetchData('/api/getFoods');

export const MenuComidas = () => {
  const [searchParams] = useSearchParams();
  const idCategory = searchParams.get('id_category');
  if (!idCategory) {
    return <Navigate to="/menu" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const filteredFoods = foodsData.filter(item => item.id_category === parseInt(idCategory)); //Filtra por la categoria seleccionada en menu
  const nameCategory = filteredFoods[0]?.name_category || "Unknown Category";

  //Visibilidad del item de la comida
  const [visibleItems, setVisibleItems] = React.useState({});
  const handleVisibility = (id, isVisible) => {
    if (isVisible) {
        setVisibleItems((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <>
        <Header typeNavegation="NavLink"></Header>
        <div className={styles.menu}>
            <h1 className={styles.title_category}>{nameCategory}</h1>
            <div className={styles.menu_foods}>
              {
                filteredFoods.map((item)=>{
                  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
                  useEffect(() => {
                      handleVisibility(item.id_food, isVisible);
                  }, [isVisible]);
                  return(
                    <div ref={ref} className={`${styles.item_food} ${visibleItems[item.id_food] ? styles.visible : ""}`} key={item.id_food}>
                      <img src={item.image_url} alt="" />
                      <span>{item.name} | {item.price}</span>
                      <span>{item.description}</span>
                    </div>
                  );
                })
              }
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
