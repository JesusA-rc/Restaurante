import { useEffect } from 'react';
import styles from '../../Pages/MenuComidas/MenuComidas.module.css';
import { useOnScreen } from "/src/Components/useOnScreen/useOnScreen";
import PropTypes from 'prop-types';

const FoodItem = ({ item, handleVisibility, handleFoodClick }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  useEffect(() => {
    handleVisibility(item.id_food, isVisible);
  }, [isVisible, item.id_food, handleVisibility]);

  return (
    <div 
      ref={ref} 
      className={`${styles.item_food} ${isVisible ? styles.visible : ""}`} 
      key={item.id_food}
      onClick={() => handleFoodClick(item)}
    >
      <img src={item.image_url} alt={item.name} />
      <span>{item.name} | ${item.price}</span>
      <span>{item.description}</span>
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
    handleVisibility: PropTypes.func.isRequired,
    handleFoodClick: PropTypes.func.isRequired,
  };

export default FoodItem;
