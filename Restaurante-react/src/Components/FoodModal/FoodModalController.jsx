import FoodModal from "./FoodModal";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const FoodModalController = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);

  const handleFoodClick = useCallback((food) => {
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
  }, []);


  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedFoodItem(null);
  }, []);

  return (
    <>
      {children(handleFoodClick)}
      {selectedFoodItem && (
        <FoodModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          foodItem={selectedFoodItem}
        />
      )}
    </>
  );
};

FoodModalController.propTypes = {
  children: PropTypes.func.isRequired,
};

export default FoodModalController;