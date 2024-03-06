// components/StarRating.js
import { useState } from 'react';
import styles from './StarRating.module.css'; // Import the CSS module

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating);
  };

  const renderStars = () => {
    const maxStars = 5;
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
      const filled = i <= rating;

      stars.push(
        <span
          key={i}
          className={`${styles.star} ${filled ? styles.filled : ''}`}
          onClick={() => handleClick(i)}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles.starRating}>
      {renderStars()}
      <p>{rating > 0 ? `You rated ${rating} stars` : 'Click a star to rate'}</p>
    </div>
  );
};

export default StarRating;
