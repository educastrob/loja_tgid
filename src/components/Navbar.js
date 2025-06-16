import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItemCount } = useCart();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">TGID Store</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/cart" className="cart-icon">
                    Carrinho
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;