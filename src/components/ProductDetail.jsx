import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                if (!res.ok) throw new Error('Failed to fetch product');
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <div style={styles.container}>
            <img src={product.thumbnail} alt={product.title} style={styles.image} />
            <div style={styles.details}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Rating:</strong> {product.rating} ⭐</p>
                <button
                    onClick={() => dispatch(addToCart(product))}
                    style={styles.button}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        padding: '2rem',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    image: {
        maxWidth: '400px',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    details: {
        flex: 1,
        minWidth: '300px',
    },
    button: {
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '1rem',
    },
};

export default ProductDetail;
