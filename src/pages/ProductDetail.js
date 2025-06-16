import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Carregando...</div>;

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">R$ {product.price.toFixed(2)}</p>
                <div className="rating">
                    {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews} reviews)
                </div>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
        </div>
    );
};

export default ProductDetail;