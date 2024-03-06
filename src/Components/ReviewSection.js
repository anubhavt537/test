// components/ReviewSection.js
import React from "react";
import StarRating from "./SafetyIcon";
import ThumbsRating from "./ThumbsRating";
import Button from "./Button";
import styles from "./ReviewSection.module.css"; // Import the CSS module for custom styles

const ReviewSection = () => {
  return (
    <section className={styles.reviewSection}>
      <h2>Safety</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <StarRating />

      <h2>Communication</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <StarRating />

      <h2>Would you recommend Trausti</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <ThumbsRating />

      <h2>Praise</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <Button buttonText="Adventure" />
      <Button buttonText="Clear" />
      <Button buttonText="Global" />
    </section>
  );
};

export default ReviewSection;
