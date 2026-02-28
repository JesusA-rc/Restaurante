import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Specialties.module.css'
import { mexicanFood } from '../../Data/mexicanfood';
import { chinesefood } from '../../Data/chinesefood';
import { japanesefood } from '../../Data/japanesefood';
import mexicanflag from '/src/assets/mexicanflag.jpg'
import chineseflag from '/src/assets/chineseflag.jpg'
import japanflag from '/src/assets/japanflag.png'
import arrowback from '/src/assets/arrowback.png'
import arrownext from '/src/assets/arrownext.png'

const Specialties = () => {
    const [foodType, setSelectedFoodType] = useState(0);
    const [foodIndex, setFoodIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const foodArrays = [mexicanFood, chinesefood, japanesefood];
    const currentFoodArray = foodArrays[foodType] || [];

    const nextFood = useCallback(() => {
        setFoodIndex((prev) => (prev + 1) % currentFoodArray.length);
    }, [currentFoodArray.length]);

    const prevFood = useCallback(() => {
        setFoodIndex((prev) => (prev === 0 ? currentFoodArray.length - 1 : prev - 1));
    }, [currentFoodArray.length]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextFood();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextFood, isPaused]);

    const handleArrowClick = (direction) => {
        if (direction === "next") nextFood();
        else prevFood();

        setIsPaused(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 10000);
    };

    const handleTypeClick = (type) => {
        setSelectedFoodType(type);
        setFoodIndex(0);
        setIsPaused(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const currentFood = currentFoodArray[foodIndex];

    return (
        <div className={styles.specialties} id='specialties'>
            <div className={styles.specialties_text}>
                <span>A World of Flavors</span>
                <span>Explore our diverse menu featuring authentic Mexican, Chinese, and Japanese cuisine.</span>
            </div>
            <div className={styles.grid_food}>   
                <div 
                  className={`${styles.food_item_type} ${foodType !== 0 ? styles.disabled : ''}`}
                  onClick={() => handleTypeClick(0)}
                >
                    <img src={mexicanflag} alt="mexican flag" />
                    <span>Mexico</span>
                </div>
                <div 
                  className={`${styles.food_item_type} ${foodType !== 1 ? styles.disabled : ''}`}
                  onClick={() => handleTypeClick(1)}
                >
                    <img src={chineseflag} alt="chinese flag" />
                    <span>China</span>
                </div>
                <div 
                  className={`${styles.food_item_type} ${foodType !== 2 ? styles.disabled : ''}`}
                  onClick={() => handleTypeClick(2)}
                >
                    <img src={japanflag} alt="japan flag" />
                    <span>Japan</span>
                </div>

                <div className={styles.food_item}>
                    <img src={currentFood?.src} alt={currentFood?.name || "Specialty"} />
                    <img onClick={() => handleArrowClick("prev")} src={arrowback} alt="arrow back" />
                    <img onClick={() => handleArrowClick("next")} src={arrownext} alt="arrow next" />
                </div>
            </div>
        </div>
    );
};

export default Specialties;
