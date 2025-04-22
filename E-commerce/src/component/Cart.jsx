import { useCart } from '../context/CartContext';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <FaTimes />
          </button>
        </div>
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  );
};
export default Cart;