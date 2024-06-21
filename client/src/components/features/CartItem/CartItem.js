import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  const { name, description } = cartItem.tour;
  const { price, numberOfPeople } = cartItem;
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/orders');
  };

  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price} $</p>
      <p>Number of people: {numberOfPeople}</p>
      <button onClick={handleOrderClick}>Order Now</button>
    </div>
  );
};

export default CartItem;
