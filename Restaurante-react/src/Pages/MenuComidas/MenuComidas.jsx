import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from './MenuComidas.module.css';
import Header from '/src/Components/Header/Header';
import { useSearchParams, Navigate } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { fetchData } from '/src/config.js';
import FoodItem from '/src/Components/FoodItem/FoodItem';
import FoodModalController from '../../Components/FoodModal/FoodModalController';

export const MenuComidas = () => {
  const [searchParams] = useSearchParams();

  const idCategory = searchParams.get('id_category');

  const { data: foodsData, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: () => fetchData('/api/getFoods'),
  });

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  if (!idCategory) {
    return <Navigate to="/menu" />;
  }

  if (isLoading) return <div className={styles.loading}>Cargando platos...</div>;
  if (isError) return <div className={styles.error}>Error al cargar los platos</div>;

  const filteredFoods = foodsData?.filter(item => item.id_category === parseInt(idCategory)) || [];
  const nameCategory = filteredFoods[0]?.name_category || "Platos";

  return (
    <>
        <Header typeNavegation="NavLink"></Header>
        <div className={styles.menu}>
            <h1 className={styles.title_category}>{nameCategory}</h1>
            <FoodModalController>
              {(handleFoodClick) => (
                <div className={styles.menu_foods}>
                  {
                    filteredFoods.map((item) => (
                      <FoodItem 
                        key={item.id_food}
                        item={item}
                        handleFoodClick={handleFoodClick}
                      />
                    ))
                  }
                </div>
              )}
            </FoodModalController>
        </div>
     
        <Footer></Footer>
    </>
  )
}
