import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const products = [
    { id: 1, title: 'Laptop', price: 999, image: 'laptop.jpg' },
    { id: 2, title: 'Phone', price: 699, image: 'phone.jpg' },
    { id: 3, title: 'Headphones', price: 199, image: 'headphones.jpg' },
  ];

  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};
export default App;