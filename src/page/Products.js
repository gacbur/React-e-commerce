import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import Product from '../components/Product'

const Products = () => {

    const { products } = useContext(GlobalContext)

    return (
        <div className="products-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Products
