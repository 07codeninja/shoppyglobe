import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>Back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '4rem',
    },
    link: {
        display: 'inline-block',
        marginTop: '1rem',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '4px',
    }
};

export default NotFound;
