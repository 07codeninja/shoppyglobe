import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartCount = useSelector((state) => state.cart.cartItems.length);

    return (
        <header style={styles.header}>
            <h2>🛍️ ShoppyGlobe</h2>
            <nav style={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart ({cartCount})</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        padding: '1rem',
        background: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
    },
    nav: {
        display: 'flex',
        gap: '1rem',
    },
};

export default Header;
