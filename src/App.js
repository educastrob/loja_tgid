import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './styles.css';

function App() {
  return (
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
  );
}

export default App;