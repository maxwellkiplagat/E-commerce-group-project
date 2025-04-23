import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container flex justify-between items-center">
        <h1>WOOLWORTHS.</h1>
        <div>
          <button 
            className="text-white text-xl relative cart-button"
            onClick={toggleCart}
          >
            <FiShoppingCart />
            {itemCount > 0 && (
              <span className="cart-count">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
