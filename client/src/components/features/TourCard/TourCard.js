import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './TourCard.module.scss';

const TourCard = ({ tour }) => {
  const date = new Date(tour.date);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return (
    <Card className={styles.tourCard}>
      <Card.Img variant="top" src={`/images/${tour.photo}`} className={styles.cardImage} />
      <Card.Body>
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>{tour.location}</Card.Text>
        <Card.Text>{formattedDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TourCard;
