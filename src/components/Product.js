import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Product = ({ product }) => {

    const { handleAddToCart } = useContext(GlobalContext)

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>Price: {product.price}$</h4>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
    )
};

export default Product
