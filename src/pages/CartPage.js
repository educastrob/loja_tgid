import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <div className="cart-page">
            <h1>Carrinho de Compras</h1>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Seu carrinho está vazio</p>
                    <Link to="/" className="continue-shopping">Continuar Comprando</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>R$ {item.price.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remover</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Resumo do pedido</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>R$ {cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Frete</span>
                            <span>Grátis</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>R$ {cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            className="checkout-btn"
                            onClick={() => alert(`Checkout realizado! Total: R$ ${cartTotal.toFixed(2)}`)}
                        >
                            Processar Checkout
                        </button>
                        <Link to="/" className="continue-shopping">Continuar Comprando</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;