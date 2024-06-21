import React from 'react';

const CartItem = ({ cartItem }) => {

  const { name, description } = cartItem.tour;
  const { price, numberOfPeople } = cartItem;

  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price} $</p>
      <p>Number of people: {numberOfPeople}</p>
    </div>
  );
};

export default CartItem;
