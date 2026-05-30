import { useState } from 'react';
import styles from './FoodModal.module.css';
import PropTypes from 'prop-types';

const FoodModal = ({ isOpen, onClose, foodItem, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        
        <div className={styles.modalHeader}>
          <div className={styles.foodInfo}>
            <span className={styles.foodName}>{foodItem.name}</span>
            <span className={styles.foodPrice}>{foodItem.price}</span>
          </div>
          <div className={styles.foodImageContainer}>
            <img src={foodItem.imageUrl} alt={foodItem.name} className={styles.foodImage} />
            <span className={styles.foodRating}>{foodItem.rating}</span>
          </div>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.descriptionContainer}>
            <p className={styles.foodDescription}>{foodItem.description}</p>
          </div>
          <div className={styles.nutritionContainer}>
            <h3>Nutrition</h3>
            <ul>
              <li><strong>Protein:</strong> {foodItem.nutrition.protein}</li>
              <li><strong>Carbohydrates:</strong> {foodItem.nutrition.carbs}</li>
              <li><strong>Fat:</strong> {foodItem.nutrition.fat}</li>
            </ul>
          </div>
          <div className={styles.orderActions}>
            <div className={styles.quantityControl}>
              <button
                type="button"
                onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className={styles.addToCartButton}
              onClick={() => {
                onAddToCart(foodItem, quantity);
                onClose();
                setQuantity(1);
              }}
            >
              Agregar al pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  foodItem: PropTypes.shape({
    id_food: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rawPrice: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    nutrition: PropTypes.shape({
      protein: PropTypes.string.isRequired,
      carbs: PropTypes.string.isRequired,
      fat: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default FoodModal;
