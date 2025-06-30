import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div style={styles.card}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={product.thumbnail} alt={product.title} style={styles.image} />
                <h3>{product.title}</h3>
            </Link>
            <p>₹{product.price}</p>
            <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        padding: '1rem',
        width: '200px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
    },
    button: {
        background: '#333',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        marginTop: '0.5rem',
        borderRadius: '4px',
    }
};

export default ProductItem;
