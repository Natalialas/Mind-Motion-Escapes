import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './TourCard.module.scss';

const TourCard = ({ tour }) => {
  return (
    <Card className={styles.tourCard}>
      <Card.Img variant="top" src={`/images/${tour.photo}`} className={styles.cardImage} />
      <Card.Body>
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>{tour.location}</Card.Text>
        <Card.Text>{tour.date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TourCard;
