import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div style={{ padding: '2rem' }}>
                <h2>Your cart is empty 🛒</h2>
                <Link to="/" style={styles.backLink}>Go back to shop</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Your Cart 🛒</h2>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <h3>Total: ₹{total}</h3>
        </div>
    );
};

const styles = {
    backLink: {
        marginTop: '1rem',
        display: 'inline-block',
        textDecoration: 'underline',
        color: '#333',
    },
};

export default Cart;
