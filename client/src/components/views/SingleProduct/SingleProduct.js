// SingleProduct.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSingleTourRequest, getTourById } from '../../../redux/toursRedux';
import { addToCartRequest } from '../../../redux/cartRedux';
import { IMAGES_URL } from '../../../config';
import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => getTourById(state, id));

  useEffect(() => {
    dispatch(loadSingleTourRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (tour) {
      console.log('Tour data in component:', tour);
    }
  }, [tour]);

  const handleAddToCart = () => {
    dispatch(addToCartRequest({ ...tour, tourId: tour.id }));
  };

  if (!tour) return <p>Loading...</p>;

  return (
    <div className={styles.singleProduct}>
      <h1 className={styles.productName}>{tour.name}</h1>
      <img src={`${IMAGES_URL}/${tour.photo}`} alt={tour.name} className={styles.photo} />
      <p className={styles.description}>{tour.description}</p>
      <p className={styles.info}>Price: ${tour.price}</p>
      <p className={styles.info}>Location: {tour.location}</p>
      <p className={styles.info}>Date: {tour.dat}</p>
      <p className={styles.info}>Duration: {tour.duration} days</p>
      <div className={styles.additionalPhotos}>
        {tour.photos && tour.photos.map((photo, index) => (
          <img
            key={index}
            src={`${IMAGES_URL}/${photo.url}`}
            alt={`${tour.name} additional view ${index + 1}`}
            className={styles.additionalPhoto}
          />
        ))}
      </div>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>Book now</button>
    </div>
  );
};

export default SingleProduct;
