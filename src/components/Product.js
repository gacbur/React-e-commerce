import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Product = ({ product }) => {

    const { handleAddToCart } = useContext(GlobalContext)

    return (
        <div className="product">
            <div className="product-image-container">
                <img src={product.image} alt={`${product.name}`} />
            </div>
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>Price: {product.price}$</h4>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
};

export default Product
