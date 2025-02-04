import React, { useState,useEffect } from 'react'
import styles from './Specialties.module.css'
import { mexicanFood } from '../../Data/mexicanfood';
import { japanesefood } from '../../Data/japanesefood';
import { chinesefood } from '../../Data/chinesefood';
import mexicanflag from '/src/assets/mexicanflag.jpg'
import chineseflag from '/src/assets/chineseflag.jpg'
import japanflag from '/src/assets/japanflag.png'
import arrowback from '/src/assets/arrowback.png'
import arrownext from '/src/assets/arrownext.png'

const Specialties = () => {
    const [foodType,setSelectedFoodType] = useState(0);
    const [food,setSelectedFood] = useState(0);
    const [intervalDuration, setIntervalDuration] = useState(3000);

    const getFoodImage = () => {
        if (foodType === 0) {
            return mexicanFood[food].src;
        } else if (foodType === 1) {
            return chinesefood[food].src;
        } else if (foodType === 2) {
            return japanesefood[food].src;
        }
        return '';
    };

    const getCurrentFoodArray = () => {
        if (foodType === 0) return mexicanFood;
        if (foodType === 1) return chinesefood;
        if (foodType === 2) return japanesefood;
        return [];
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFood(prevFood => 
                (prevFood + 1) % getCurrentFoodArray().length
            );
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [foodType,intervalDuration]);

    const handleArrowClick = (direction) => {
        setIntervalDuration(10000); // Cambia el intervalo a 10 segundos

        // Después de 6 segundos, vuelve a 3 segundos
        setTimeout(() => setIntervalDuration(3000), 10000);

        setSelectedFood((prevFood) => {
            if (direction === "next") {
                return (prevFood + 1) % getCurrentFoodArray().length;
            } else if (direction === "prev") {
                return prevFood === 0 
                    ? getCurrentFoodArray().length - 1 
                    : prevFood - 1;
            }
        });
    };

  return (
    <div className={styles.specialties} id='specialties'>
        <div className={styles.specialties_text}>
            <span>A World of Flavors</span>
            <span>Explore our diverse menu featuring authentic Mexican, Chinese, and Japanese cuisine.</span>
        </div>
        <div className={styles.grid_food}>   
            <div className={`${styles.food_item_type} ${foodType !== 0 ? styles.disabled : ''}`}>
                <img onClick={() => setSelectedFoodType(0)} src={mexicanflag} alt="mexican flag" />
                <span>Mexico</span>
            </div>
            <div className={`${styles.food_item_type} ${foodType !== 1 ? styles.disabled : ''}`}>
                <img onClick={() => setSelectedFoodType(1)} src={chineseflag} alt="chinese flag" />
                <span>China</span>
            </div>
            <div className={`${styles.food_item_type} ${foodType !== 2 ? styles.disabled : ''}`}>
                <img onClick={() => setSelectedFoodType(2)} src={japanflag} alt="japan flag" />
                <span>Japan</span>
            </div>

            <div className={styles.food_item}>
                <img src={getFoodImage()} alt="" />
                <img onClick={() => handleArrowClick("prev")} src={arrowback} alt="arrow back" />
                <img src={arrownext} onClick={() => handleArrowClick("next")}   alt="arrow next" />
            </div>
        </div>
    </div>
  )
}

export default Specialties