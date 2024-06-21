import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartItemsRequest } from '../../../redux/cartRedux';
import CartItem from '../../features/CartItem/CartItem';

const CartPage = ({ userId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const loading = useSelector((state) => state.cart.requests?.LOAD_ALL_ITEMS?.pending);
  const error = useSelector((state) => state.cart.requests?.LOAD_ALL_ITEMS?.error);

  useEffect(() => {
    if (userId) {
      dispatch(loadCartItemsRequest());
    }
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Cart items:", cartItems);

  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export default CartPage;
