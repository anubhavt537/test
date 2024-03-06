// components/ThumbsRating.js
import { useState } from 'react';
import styles from './ThumbsRating.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons

const ThumbsRating = () => {
  const [rating, setRating] = useState(null);

  const handleThumbClick = (selectedRating) => {
    setRating(selectedRating === rating ? null : selectedRating);
  };

  return (
    <div className={styles.thumbsRating}>
      <button
        className={`${styles.thumbButton} ${rating === 'Yes' ? styles.green : ''}`}
        onClick={() => handleThumbClick('Yes')}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button
        className={`${styles.thumbButton} ${rating === 'No' ? styles.green : ''}`}
        onClick={() => handleThumbClick('No')}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
      <p>{rating ? ` ${rating}` : 'Click a thumb to rate'}</p>
    </div>
  );
};

export default ThumbsRating;
