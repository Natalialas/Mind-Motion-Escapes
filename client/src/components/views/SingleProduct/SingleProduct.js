import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSingleTourRequest, getTourById } from '../../../redux/toursRedux';
import { IMAGES_URL } from '../../../config';
import styles from './SingleProduct.module.scss';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tour = useSelector(state => getTourById(state, id));

  useEffect(() => {
    dispatch(loadSingleTourRequest(id));
  }, [dispatch, id]);

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
    </div>
  );
};

export default SingleProduct;
