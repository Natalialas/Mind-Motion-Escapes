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

  const firstSixTours = allTours.slice(0, 6);
  const toursCount = firstSixTours.length;

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < toursCount; i++) {
      const slideTours = [];
      for (let j = 0; j < 3; j++) {
        slideTours.push(firstSixTours[(i + j) % toursCount]);
      }
      slides.push(slideTours);
    }
    return slides;
  };

  const slides = getSlides();

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      className={styles.carousel}
      interval={3000}
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className={styles.carouselGroup}>
            {slide.map((tour, idx) => (
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
