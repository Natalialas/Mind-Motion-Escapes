import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './TourCard.module.scss';
import { IMAGES_URL } from '../../../config';

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tours/${tour.id}`);
  };

  return (
    <Card className={styles.tourCard} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        <Card.Img variant="top" src={`${IMAGES_URL}/${tour.photo}`} className={styles.cardImage} />
      </div>
      <div className={styles.overlay}>
        <Card.Title className={styles.name}>{tour.name}</Card.Title>
        <Card.Text className={styles.location}>{tour.location}</Card.Text>
        <Card.Text className={styles.dat}>{tour.dat}</Card.Text>
      </div>
    </Card>
  );
};

export default TourCard;
