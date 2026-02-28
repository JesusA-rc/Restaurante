import styles from './FoodSkeleton.module.css';

const FoodSkeleton = () => {
  return (
    <div className={styles.skeleton_item}>
      <div className={styles.skeleton_img}></div>
      <div className={styles.skeleton_info}>
        <div className={styles.skeleton_name}></div>
        <div className={styles.skeleton_desc}></div>
      </div>
    </div>
  );
};

export default FoodSkeleton;
