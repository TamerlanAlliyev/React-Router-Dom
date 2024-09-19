import React from 'react';
import products from '../data/data.json';
import Product from '../components/Product';

export default function Products() {
    return (
        <div>
            {products && products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
