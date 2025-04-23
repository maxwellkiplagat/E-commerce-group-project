import React from 'react';
import '../styles/styles.css'

const Sidebar = ({ setSortOrder, setFilterCategory }) => {
  return (
      
    <div className="sidebar">
      <h2 className="font-bold mb-4">Sort By</h2>
      <button onClick={() => setSortOrder('lowToHigh')} className="block mb-2">Price: Low to High</button>
      <button onClick={() => setSortOrder('highToLow')} className="block mb-2">Price: High to Low</button>

      <h2 className="font-bold mt-6 mb-4">Filter By Category</h2>
      <button onClick={() => setFilterCategory('electronics')} className="block mb-2">Electronics</button>
      <button onClick={() => setFilterCategory('jewelery')} className="block mb-2">Jewelery</button>
      <button onClick={() => setFilterCategory('men\'s clothing')} className="block mb-2">Men's Clothing</button>
      <button onClick={() => setFilterCategory('women\'s clothing')} className="block mb-2">Women's Clothing</button>
      <button onClick={() => setFilterCategory('')} className="block mb-2">Clear Filter</button>
    </div>
  );
};

export default Sidebar;
