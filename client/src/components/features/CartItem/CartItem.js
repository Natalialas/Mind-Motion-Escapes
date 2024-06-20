const CartItem = ({ product }) => {
    if (!product || !product.tour) {
      return <div className="cart-item">Product details are not available</div>;
    }
  
    return (
      <div className="cart-item">
        <h2>{product.tour.name}</h2>
        <p>{product.tour.description}</p>
        <p>{product.price} $</p>
        <p>Number of people: {product.numberOfPeople}</p>
      </div>
    );
  };
  
export default CartItem;
  