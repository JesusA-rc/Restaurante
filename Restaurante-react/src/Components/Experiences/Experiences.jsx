import styles from './Experiences.module.css';
import { testimonials } from '../../Data/testimonials';
import { useOnScreen } from '../useOnScreen/UseOnScreen';

const StarIcon = () => (
  <svg className={styles.star} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ReviewCard = ({ testimonial, index }) =>
{
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={styles.avatarWrapper}>
        <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
      </div>
      <h3 className={styles.name}>{testimonial.name}</h3>
      <span className={styles.destination}>{testimonial.destination}</span>
      <div className={styles.stars}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className={styles.reviewText}>"{testimonial.review}"</p>
    </div>
  );
};

const Experiences = () => 
{
  return (
    <section className={styles.experiencesContainer} id="experiences">
      <h2 className={styles.title}>Guest Experiences</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
