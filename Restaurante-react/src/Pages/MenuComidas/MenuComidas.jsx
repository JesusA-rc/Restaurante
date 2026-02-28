import { useEffect, useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from './MenuComidas.module.css';
import Header from '/src/Components/Header/Header';
import { useSearchParams, Navigate } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { fetchData } from '/src/config.js';
import FoodItem from '/src/Components/FoodItem/FoodItem';
import FoodSkeleton from '/src/Components/FoodItem/FoodSkeleton';
import FoodModalController from '../../Components/FoodModal/FoodModalController';

export const MenuComidas = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  const idCategory = searchParams.get('id_category');

  const { data: foodsData, isLoading, isError } = useQuery({
    queryKey: ['foods'],
    queryFn: () => fetchData('/api/getFoods'),
  });

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const filteredFoods = useMemo(() => {
    if (!foodsData || !idCategory) return [];
    return foodsData
      .filter(item => item.id_category === parseInt(idCategory))
      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [foodsData, idCategory, searchTerm]);

  if (!idCategory) {
    return <Navigate to="/menu" />;
  }

  if (isError) return <div className={styles.error}>Error al cargar los platos</div>;

  const nameCategory = filteredFoods[0]?.name_category || "Platos";

  return (
    <>
        <Header typeNavegation="NavLink"></Header>
        <div className={styles.menu}>
            <h1 className={styles.title_category}>{nameCategory}</h1>
            
            <div className={styles.search_container}>
              <input 
                type="text" 
                placeholder="Search your favorite food..." 
                className={styles.search_input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <FoodModalController>
              {(handleFoodClick) => (
                <div className={styles.menu_foods}>
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, idx) => (
                      <FoodSkeleton key={idx} />
                    ))
                  ) : filteredFoods.length > 0 ? (
                    filteredFoods.map((item) => (
                      <FoodItem 
                        key={item.id_food}
                        item={item}
                        handleFoodClick={handleFoodClick}
                      />
                    ))
                  ) : (
                    <div className={styles.no_results}>No food found matching your search.</div>
                  )}
                </div>
              )}
            </FoodModalController>
        </div>
     
        <Footer></Footer>
    </>
  )
}
