import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TourCard.module.scss';
import { IMAGES_URL } from '../../../config';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tours/${tour.id}`);
  };

  return (
    <div className={styles.tourCard}>
      <div className={styles.imageContainer}>
        <img src={`${IMAGES_URL}/${tour.photo}`} alt={tour.name} className={styles.cardImage} />
        <div className={styles.overlay}>
          <h2 className={styles.name}>{tour.name}</h2>
          <p className={styles.location}>{tour.location}</p>
          <p className={styles.dat}>{tour.dat}</p>
          <button className={styles.button} onClick={handleCardClick}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
