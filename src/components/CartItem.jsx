import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value);
        if (quantity > 0) {
            dispatch(changeQuantity({ id: item.id, quantity }));
        }
    };

    return (
        <div style={styles.card}>
            <img src={item.thumbnail} alt={item.title} style={styles.image} />
            <div style={styles.details}>
                <h3>{item.title}</h3>
                <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    style={styles.input}
                />
                <button onClick={handleRemove} style={styles.button}>Remove</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    details: {
        flex: 1,
    },
    input: {
        width: '60px',
        marginRight: '1rem',
        padding: '0.25rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#c0392b',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default CartItem;
