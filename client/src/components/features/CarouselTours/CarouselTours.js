import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import TourCard from '../TourCard/TourCard';
import { getAllTours, loadToursRequest } from '../../../redux/toursRedux';
import styles from './CarouselTours.module.scss';

const CarouselTours = () => {
  const dispatch = useDispatch();
  const allTours = useSelector(getAllTours);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(loadToursRequest());
  }, [dispatch]);

  const firstSixTours = allTours.slice(0, 6); // Pobieranie pierwszych 6 wycieczek
  const toursCount = firstSixTours.length;

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      className={styles.carousel}
      interval={null}
    >
      {[...Array(toursCount)].map((_, index) => (
        <Carousel.Item key={index}>
          <div className={styles.carouselGroup}>
            {firstSixTours.slice(index, index + 3).map((tour, idx) => (
              <div className={styles.carouselItem} key={idx}>
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselTours;
