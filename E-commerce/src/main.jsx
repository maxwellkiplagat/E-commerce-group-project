import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import your main App component
import { CartProvider } from './context/CartContext'; // CartContext



// Wrap App component with CartProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

