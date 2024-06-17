import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import TourCard from '../TourCard/TourCard';
import { getAllTours, loadToursRequest } from '../../../redux/toursRedux';
import styles from './CarouselTours.module.scss';

const CarouselTours = () => {
  const dispatch = useDispatch();
  const allTours = useSelector(getAllTours);

  useEffect(() => {
    dispatch(loadToursRequest());
  }, [dispatch]);

  return (
    <Carousel className={styles.carousel}>
      {allTours.map((tour, index) => (
        <Carousel.Item key={index}>
          <div className={styles.carouselItem}>
            <TourCard tour={tour} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselTours;
