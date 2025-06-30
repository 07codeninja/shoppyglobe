import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products, loading, error } = useFetchProducts();
    const [search, setSearch] = useState('');

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ padding: '1rem' }}>
            <h2>🛒 Products</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '0.5rem', margin: '1rem 0', width: '100%' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {filtered.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
