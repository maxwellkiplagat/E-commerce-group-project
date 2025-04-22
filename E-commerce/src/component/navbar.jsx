import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  
  return (
    <nav className="navbar">
      <Link to="/" className="logo">E-Shop</Link>
      <Link to="/cart" className="cart-link">
        <FaShoppingCart />
        <span className="cart-count">{cartItems.length}</span>
      </Link>
    </nav>
  );
};