import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Sidebar from './Sidebar';
import '../styles/styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const { addToCart } = useCart();

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filterCategory) {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(filtered);
  }, [products, sortOrder, filterCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newProduct, price: parseFloat(newProduct.price) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, data]);
        setNewProduct({ name: '', price: '', category: '', image: '' });
      })
      .catch((err) => alert('Error adding product: ' + err.message));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex">
      <Sidebar setSortOrder={setSortOrder} setFilterCategory={setFilterCategory} />

      <div className="add-product-form">
        <form onSubmit={handleFormSubmit}>
          <input
            id='one'
            name="name"
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="jewelery">Jewelery</option>
            <option value="Sneakers">Sneakers</option>
            <option value="womens clothing">Women's Clothing</option>
            <option value="mens clothing">Men's Clothing</option>
          </select>
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Product</button>
        </form>

        <div className="product-list">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Ksh {product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
