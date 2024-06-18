import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './TourCard.module.scss';
import { IMAGES_URL } from '../../../config';

const TourCard = ({ tour }) => {
  return (
    <Card className={styles.tourCard}>
      <div className={styles.overlay}>
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>{tour.location}</Card.Text>
        <Card.Text>{tour.date}</Card.Text>
      </div>
      <Card.Img variant="top" src={`${IMAGES_URL}/${tour.photo}`} className={styles.cardImage} />
    </Card>
  );
};

export default TourCard;
