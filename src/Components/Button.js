// components/Button.js
import React, { useState } from 'react';
import styles from './Button.module.css'; // Import the CSS module

const Button = ({ buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`${styles.button} ${isClicked ? styles.green : ''}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
