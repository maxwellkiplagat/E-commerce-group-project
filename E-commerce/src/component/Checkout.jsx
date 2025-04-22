import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { clearCart } = useCart();

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit" onClick={clearCart}>
          Complete Purchase
        </button>
      </form>
    </div>
  );
};
export default Checkout;