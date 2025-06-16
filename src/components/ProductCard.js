import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>R$ {product.price.toFixed(2)}</p>
                <div className="rating">
                    {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews})
                </div>
                <p className="product-description">{product.description}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ProductCard;