import { useEffect, useState } from 'react';
import styles from '../../Pages/MenuComidas/MenuComidas.module.css';
import { useOnScreen } from "/src/Components/useOnScreen/useOnScreen";
import PropTypes from 'prop-types';

const FoodItem = ({ item, handleFoodClick }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  return (
    <div 
      ref={ref} 
      className={`${styles.item_food} ${hasBeenVisible ? styles.visible : ""}`} 
      key={item.id_food}
      onClick={() => handleFoodClick(item)}
    >
      <img src={item.image_url} alt={item.name} />
      <div className={styles.food_info}>
        <span className={styles.food_name}>{item.name} | ${item.price}</span>
        <span className={styles.food_desc}>{item.description}</span>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
    item: PropTypes.shape({
      id_food: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
    handleFoodClick: PropTypes.func.isRequired,
  };

export default FoodItem;
