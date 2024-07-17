import React, { useEffect, useState } from 'react';
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
  const [numberOfPeople, setNumberOfPeople] = useState(1); // State for number of people

  useEffect(() => {
    dispatch(loadSingleTourRequest(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCartRequest({ ...tour, tourId: tour.id, numberOfPeople }));
  };

  if (!tour) return <p>Loading...</p>;

  return (
    <div className={styles.singleProduct}>
      <div className={styles.mainContent}>
        <img src={`${IMAGES_URL}/${tour.photo}`} alt={tour.name} className={styles.photo} />
        <div className={styles.textContent}>
          <h1 className={styles.productName}>{tour.name}</h1>
          <p className={styles.description}>{tour.description}</p>
          <p className={styles.info}><strong>Price:</strong> ${tour.price}</p>
          <p className={styles.info}><strong>Location:</strong> {tour.location}</p>
          <p className={styles.info}><strong>Date:</strong> {tour.dat}</p>
          <p className={styles.info}><strong>Duration:</strong> {tour.duration} days</p>

          <div className={styles.inputContainer}>
            <label htmlFor="numberOfPeople" className={styles.label}>Select number of people:</label>
            <input 
              id="numberOfPeople"
              type="number" 
              value={numberOfPeople} 
              onChange={(e) => setNumberOfPeople(Number(e.target.value))}
              min="1" 
              className={styles.numberInput}
            />
            <button className={styles.addToCartButton} onClick={handleAddToCart}>
              Book now
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default SingleProduct;
