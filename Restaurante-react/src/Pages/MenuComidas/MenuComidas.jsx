import React, {useEffect, useState, useCallback} from 'react';
import styles from './MenuComidas.module.css';
import Header from '/src/components/Header/Header';
import { useSearchParams,Navigate } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer'
import { fetchData } from '/src/config.js';
import FoodModal from '/src/Components/FoodModal/FoodModal';
import FoodItem from '/src/Components/FoodItem/FoodItem';

const foodsData =  await fetchData('/api/getFoods');

export const MenuComidas = () => {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [visibleItems, setVisibleItems] = React.useState({});

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const handleVisibility = useCallback((id, isVisible) => {
    if (isVisible) {
        setVisibleItems((prev) => ({ ...prev, [id]: true }));
    }
  }, []);

  const handleFoodClick = (food) => {
    setSelectedFoodItem({
      name: food.name,
      price: `$ ${food.price}`,
      description: food.description,
      imageUrl: food.image_url,
      rating: '4.5/5',
      nutrition: {
        protein: '20g',
        carbs: '30g',
        fat: '15g',
      },
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFoodItem(null);
  };
  
  const idCategory = searchParams.get('id_category');
  if (!idCategory) {
    return <Navigate to="/menu" />;
  }

  const filteredFoods = foodsData.filter(item => item.id_category === parseInt(idCategory));
  const nameCategory = filteredFoods[0]?.name_category || "Unknown Category";

  return (
    <>
        <Header typeNavegation="NavLink"></Header>
        <div className={styles.menu}>
            <h1 className={styles.title_category}>{nameCategory}</h1>
            <div className={styles.menu_foods}>
              {
                filteredFoods.map((item) => (
                  <FoodItem 
                    key={item.id_food}
                    item={item}
                    handleVisibility={handleVisibility}
                    handleFoodClick={handleFoodClick}
                    isVisibleProp={visibleItems[item.id_food]}
                  />
                ))
              }
            </div>
        </div>
        <Footer></Footer>

        {selectedFoodItem && (
          <FoodModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            foodItem={selectedFoodItem} 
          />
        )}
    </>
  )
}
